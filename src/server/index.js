import puppeteer from 'puppeteer';
import express from 'express';
import ServerStyleSheet from 'styled-components';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import reducer from '../client/store';
import DaVinci from './davinci/DaVinci.view';

const app = express();
//const sheet = new ServerStyleSheet();
//const jsx = sheet.collectStyles();

// Add headers
app.use(function(req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/render', async (req, res, next) => {
  const store = createStore(reducer);

  const component = renderToString(
    <Provider store={store}>
      <DaVinci />
    </Provider>,
  );

  console.log(component);
  console.log(store.getState());

  //const stream = sheet.interleaveWithNodeStream(renderToNodeStream(jsx));

  /*  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  const page = await browser.newPage();

  await page.setContent(html, { waitUntil: ['domcontentloaded', 'networkidle0'] });
  await page.emulateMedia('screen');
  const pdf = await page.pdf({
    path: 'prova.pdf',
    format: 'A4',
    scale: 0.75,
    printBackground: true,
  });
  await browser.close();
  return pdf; */

  // Grab the initial state from our Redux store

  // Send the rendered page back to the client
  res.send(renderFullPage(component));
});

function renderFullPage(component) {
  return `
    <!doctype html>
    <html>
      <head><title>My First SSR</title></head>
      <body>
      <h1>My First Server Side Render</h1>
      <div id="pdf">
        <main>
        ${component}
        </main>
      </div>
      <script src="/app.js" charset="utf-8"></script>
      <script src="/vendor.js" charset="utf-8"></script>
      </body>
    </html>
    `;
}

app.listen(5000, function() {
  console.log('listening on port 5000!');
});
