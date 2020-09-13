import 'module-alias/register';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import config from '../config/config';
import photoController from './controllers/photo.controller';
import renderController from './controllers/render.controller';

const app = express();

const corsOptions = {
  origin: config.client_url,
  optionsSuccessStatus: 200,
  methods: 'POST',
};

app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json({ limit: '50mb', extended: true }));
app.use(cors(corsOptions));
app.use(express.static('public'));

app.use(config.upload_endpoint, photoController);

app.use(config.render_endpoint, renderController);

app.listen(process.env.PORT || config.server_port);
