import Express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

const app = Express();

// To call client.js. Something just like environment variables.
app.use(Express.static('public')); // Wait for request to index page.
app.get('/', (req, res) => {
  res.send(
    ReactDOMServer.renderToString(
      <div>
        <div id="app" /> // Main.jsx is rendered in here.
        <script src="client.js" />
      </div>,
    ),
  );
}); // Launch server
app.listen(3000, () => {
  console.log('listening on port 3000!');
});
