import express from 'express';
import qs from 'qs';
import puppeteer from 'puppeteer';
import homedir from 'os';
import fs from 'fs';
import { createStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import React from 'react';
import i18next from 'i18next';
import middleware from 'i18next-http-middleware';
import rootReducer from '../../client/store/store';
import { renderToStaticMarkup } from 'react-dom/server';
import DaVinci from '../../client/templates/davinci/DaVinci';

const renderController = express.Router();

async function handleRender(req, res) {
	res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');

  const parsedBody = qs.parse(req.body);
  const detailsData = parsedBody.details;
  const templateSelected = parsedBody.templateSelected;

  const preloadedState = {
    details: detailsData,
  };

  const store = createStore(rootReducer, preloadedState);

  const component = renderToStaticMarkup(
    <Provider store={store}>
      <DaVinci />
    </Provider>,
  );

  const finalState = store.getState();

  try {
    i18next.use(middleware.LanguageDetector).init({
      preload: ['en', 'de', 'it', 'es', 'fr'],
      lng: 'en',
      debug: false,
    });

    const browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    const page = await browser.newPage();

    const html = renderFullPage(component, finalState);

    await page.setContent(html, {
      waitUntil: ['domcontentloaded', 'networkidle0'],
    });

    await page.emulateMediaType('screen');

    const pdf = await page.pdf({
      format: 'A4',
      printBackground: false,
    });

    await browser.close();

    res.contentType('application/pdf');
    res.status(200).send({
      pdf: Buffer.from(pdf).toString('base64'),
    });
  } catch (error) {
    res.status(500);
    console.error(error);
  }
}

function renderFullPage(html, preloadedState) {
  return `
    <html>
      <head>
        <link
          href="https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap"
          type="text/css"
        />
      <style>
        body {
          font-family: 'Noto Sans KR', sans-serif;
          color: #333;
          font-weight: normal;
        }
        svg {
          width: 0.8em;
          height: 0.8em;
        }
      </style>
      </head>
      <body>${html}</body>
			<script>
				// WARNING: See the following for security issues around embedding JSON in HTML:
				// https://redux.js.org/recipes/server-rendering/#security-considerations
				window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
			</script>
    </html>
  `;
}

renderController.post('/', (req, res) => {
  handleRender(req, res);
});

export default renderController;
