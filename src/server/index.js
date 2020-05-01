import 'module-alias/register';
import puppeteer from 'puppeteer';
import express from 'express';
import bodyParser from 'body-parser';
import React from 'react';
import i18next from 'i18next';
import middleware from 'i18next-http-middleware';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import { renderToStaticMarkup } from 'react-dom/server';
import cors from 'cors';
import multer from 'multer';
import fs from 'fs';
import config from '@config/config';
import DaVinci from '@server/templates/davinci/DaVinci.view';
import Caravaggio from '@server/templates/caravaggio/Caravaggio.view';
import Donatello from '@server/templates/donatello/Donatello.view';
import Michelangelo from '@server/templates/michelangelo/Michelangelo.view';
import Raffaello from '@server/templates/raffaello/Raffaello.view';

const app = express();
const sheet = new ServerStyleSheet();

const corsOptions = {
  origin: config.client_url,
  optionsSuccessStatus: 200,
  methods: 'POST',
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/assets/');
  },
  filename: function (req, file, cb) {
    cb(null, 'photo_profile.jpg');
  },
});

// function to encode file data to base64 encoded string
const base64_encode = file => {
  // read binary data
  var bitmap = fs.readFileSync(file);

  // convert binary data to base64 encoded string
  return `data://text/plain;base64,${Buffer(bitmap).toString('base64')}`;
};

const upload = multer({ storage: storage }).single('file');

app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json({ limit: '50mb', extended: true }));
app.use(cors(corsOptions));
app.use(express.static('public'));

app.post('/upload', async (req, res) => {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err);
    } else if (err) {
      return res.status(500).json(err);
    }

    return res.status(200).send(req.file);
  });
});

app.post('/render', async (req, res) => {
  try {
    const data = req.body;

    data.photo = base64_encode('public/assets/photo_profile.jpg');

    i18next.use(middleware.LanguageDetector).init({
      preload: ['en', 'de', 'it', 'es', 'fr'],
      fallbackLng: data.lang, //TODO this is a workaround, should be a better way to do it
    });

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
      <head>
      <style>
        @import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap');

        body {
          font-family: 'Noto Sans KR', sans-serif;
          color: #333;
        }
        svg {
          width: 0.8em;
          height: 0.8em;
        }
      </style>
      ${css}
      </head>
      <body>${component}</body>
    </html>
  `;

    const browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    const page = await browser.newPage();

    await page.setContent(html, { waitUntil: ['domcontentloaded', 'networkidle0'] });
    await page.emulateMedia('screen');

    const pdfUrl = `pdf/${data.firstName}_${data.lastName}_CV.pdf`;

    const pdf = await page.pdf({
      path: `public/${pdfUrl}`,
      format: 'A4',
      scale: 0.75,
      printBackground: true,
    });

    await browser.close();

    res.status(200).send({ url: pdfUrl }).end();

    return pdf;
  } catch (error) {
    res.status(500);
    console.error(error);
  }
});

app.listen(config.server_port);
