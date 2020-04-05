const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('HEllo');
});

app.listen(4000, () => {
  console.log('listening on port 4000!');
});
