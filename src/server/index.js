import 'module-alias/register';
import puppeteer from 'puppeteer';
import express from 'express';
import bodyParser from 'body-parser';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import cors from 'cors';

import { SERVER_PORT, CLIENT_URL } from '@utils/endpoints';
import DaVinci from '@server/templates/davinci/DaVinci.view';
import Caravaggio from '@server/templates/caravaggio/Caravaggio.view';
import Donatello from '@server/templates/donatello/Donatello.view';
import Michelangelo from '@server/templates/michelangelo/Michelangelo.view';
import Raffaello from '@server/templates/raffaello/Raffaello.view';

const app = express();
const sheet = new ServerStyleSheet();

const corsOptions = {
  origin: CLIENT_URL,
  optionsSuccessStatus: 200,
  methods: 'POST',
};

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors(corsOptions));

app.post('/render', async (req, res, next) => {
  try {
    const data = req.body;

    let component;
    if (data.selected === '0') {
      component = renderToStaticMarkup(
        <StyleSheetManager sheet={sheet.instance}>
          <DaVinci {...data} />
        </StyleSheetManager>,
      );
    } else if (data.selected === '1') {
      component = renderToStaticMarkup(
        <StyleSheetManager sheet={sheet.instance}>
          <Michelangelo {...data} />
        </StyleSheetManager>,
      );
    } else if (data.selected === '2') {
      component = renderToStaticMarkup(
        <StyleSheetManager sheet={sheet.instance}>
          <Donatello {...data} />
        </StyleSheetManager>,
      );
    } else if (data.selected === '3') {
      component = renderToStaticMarkup(
        <StyleSheetManager sheet={sheet.instance}>
          <Raffaello {...data} />
        </StyleSheetManager>,
      );
    } else {
      component = renderToStaticMarkup(
        <StyleSheetManager sheet={sheet.instance}>
          <Caravaggio {...data} />
        </StyleSheetManager>,
      );
    }

    const css = sheet.getStyleTags();

    const html = `
    <html>
      <head>${css}</head>
      <body>${component}</body>
    </html>
  `;

    const browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    const page = await browser.newPage();

    await page.setContent(html, { waitUntil: ['domcontentloaded', 'networkidle0'] });
    await page.emulateMedia('screen');

    const pdf = await page.pdf({
      path: `${data.firstName}_${data.lastName}_CV.pdf`,
      format: 'A4',
      scale: 0.75,
      printBackground: true,
    });

    await browser.close();
    return pdf;
  } catch (error) {
    res.status(500);
    console.log(error);
  }
});

app.listen(SERVER_PORT, function () {
  console.log(`listening on port ${SERVER_PORT}`);
});
