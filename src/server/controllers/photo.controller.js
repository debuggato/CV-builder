import express from 'express';
import multer from 'multer';

const photoController = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/assets/');
  },
  filename: (req, file, cb) => {
    cb(null, 'photo_profile.jpg');
  },
});

const upload = multer({ storage }).single('file');

photoController.post('/', (req, res) => {
  upload(req, res, err => {
    if (err instanceof multer.MulterError && err) {
      return res.status(500).json(err);
    }

    return res.status(200).send(res.file);
  });
});

export default photoController;
