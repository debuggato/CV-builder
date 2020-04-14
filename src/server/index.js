import puppeteer from 'puppeteer';
import express from 'express';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import React from 'react';
import { renderToString } from 'react-dom/server';
import DaVinci from './davinci/DaVinci.view';
import bodyParser from 'body-parser';

const app = express();
const sheet = new ServerStyleSheet();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Add headers
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.post('/render', async (req, res, next) => {
  const component = renderToString(
    <StyleSheetManager sheet={sheet.instance}>
      <DaVinci {...req.body} />
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

app.listen(5000, function () {
  console.log('listening on port 5000!');
});
