import express from 'express';
import cors from 'cors';
import renderController from './render.controller';

const app = express();

const corsOptions = {
  origin: app.get('env') === "development" ? 'http://localhost:8080' : 'https://cv-builder-three.vercel.app',
	optionsSuccessStatus: 200,
  methods: 'POST',
};

app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json({ limit: '50mb', extended: true }));
app.use(cors(corsOptions));

app.use('/api/render', renderController);

app.listen(process.env.PORT || 5000);

module.exports = app;
