import puppeteer from 'puppeteer';
import express from 'express';
import bodyParser from 'body-parser';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import React from 'react';
import { renderToString } from 'react-dom/server';
import cors from 'cors';

import { SERVER_PORT } from '../utils/endpoints';
import DaVinci from './templates/davinci/DaVinci.view';
import Caravaggio from './templates/caravaggio/Caravaggio.view';
import Donatello from './templates/donatello/Donatello.view';
import Michelangelo from './templates/michelangelo/Michelangelo.view';
import Raffaello from './templates/raffaello/Raffaello.view';

const app = express();
const sheet = new ServerStyleSheet();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

function getTemplate(selected, props) {
  switch (selected) {
    case '0':
      return <DaVinci {...props} />;
    case '1':
      return <Michelangelo {...props} />;
    case '2':
      return <Donatello {...props} />;
    case '3':
      return <Raffaello {...props} />;
    case '4':
      return <Caravaggio {...props} />;
  }
}

app.post('/render', async (req, res, next) => {
  const data = req.body;

  const component = renderToString(
    <StyleSheetManager sheet={sheet.instance}>
      {getTemplate(data.templateSelected, data)}
    </StyleSheetManager>,
  );

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
    path: 'CV.pdf',
    format: 'A4',
    scale: 0.75,
    printBackground: true,
  });

  await browser.close();
  return pdf;
});

app.listen(SERVER_PORT, function () {
  console.log(`listening on port ${SERVER_PORT}`);
});
