import express from 'express';
import cors from 'cors';
import photoController from '../src/server/controllers/photo.controller';
import renderController from '../src/server/controllers/render.controller';

const app = express();

const corsOptions = {
  //origin: 'https://cv-builder.stormkit.dev',
  origin: 'http://localhost:8080',
  optionsSuccessStatus: 200,
  methods: 'POST',
};

app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json({ limit: '50mb', extended: true }));
app.use(cors(corsOptions));
app.use(express.static('public'));

app.use('/upload', photoController);

app.use('/render', renderController);

app.listen(process.env.PORT || 5000);

module.exports = app;
