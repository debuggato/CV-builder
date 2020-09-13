import express from 'express';
import puppeteer from 'puppeteer';
import homedir from 'os';
import fs from 'fs';
import React from 'react';
import i18next from 'i18next';
import middleware from 'i18next-http-middleware';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import { renderToStaticMarkup } from 'react-dom/server';
import DaVinci from '../../server/templates/davinci/DaVinci.view';
import Caravaggio from '../../server/templates/caravaggio/Caravaggio.view';
import Donatello from '../../server/templates/donatello/Donatello.view';
import Michelangelo from '../../server/templates/michelangelo/Michelangelo.view';
import Raffaello from '../../server/templates/raffaello/Raffaello.view';

const renderController = express.Router();
const sheet = new ServerStyleSheet();

// function to encode file data to base64 encoded string
const base64_encode = file => {
  // read binary data
  var bitmap = fs.readFileSync(file);

  // convert binary data to base64 encoded string
  return `data://text/plain;base64,${Buffer(bitmap).toString('base64')}`;
};

const renderComponent = data => {
  if (data.selected === '0') {
    return renderToStaticMarkup(
      <StyleSheetManager sheet={sheet.instance}>
        <DaVinci {...data} />
      </StyleSheetManager>,
    );
  } else if (data.selected === '1') {
    return renderToStaticMarkup(
      <StyleSheetManager sheet={sheet.instance}>
        <Michelangelo {...data} />
      </StyleSheetManager>,
    );
  } else if (data.selected === '2') {
    return renderToStaticMarkup(
      <StyleSheetManager sheet={sheet.instance}>
        <Donatello {...data} />
      </StyleSheetManager>,
    );
  } else if (data.selected === '3') {
    return renderToStaticMarkup(
      <StyleSheetManager sheet={sheet.instance}>
        <Raffaello {...data} />
      </StyleSheetManager>,
    );
  } else {
    return renderToStaticMarkup(
      <StyleSheetManager sheet={sheet.instance}>
        <Caravaggio {...data} />
      </StyleSheetManager>,
    );
  }
};

const renderHTML = (style, component) => {
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
      ${style}
      </head>
      <body>${component}</body>
    </html>
  `;
};

renderController.post('/', async (req, res) => {
  try {
    const data = req.body.data;

    if (data.photo) {
      data.photo = base64_encode('public/assets/photo_profile.jpg');
    }

    const component = renderComponent(data);

    i18next.use(middleware.LanguageDetector).init({
      preload: ['en', 'de', 'it', 'es', 'fr'],
      fallbackLng: data.lang, //TODO this is a workaround, should be a better way to do it
      lng: 'en',
      debug: false,
    });

    const css = sheet.getStyleTags();

    const browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    const page = await browser.newPage();

    await page.setContent(renderHTML(css, component), {
      waitUntil: ['domcontentloaded', 'networkidle0'],
    });
    await page.emulateMediaType('screen');

    const pdfName = `${data.firstName}_${data.lastName}_CV.pdf`;

    await page.pdf({
      path: `${homedir.homedir()}/${pdfName}`,
      format: 'A4',
      printBackground: true,
    });
    await page.goto(`file:///${homedir.homedir()}/${pdfName}`);
    await browser.close();

    res.status(200).end();

    return page;
  } catch (error) {
    res.status(500);
    console.error(error);
  }
});

export default renderController;
