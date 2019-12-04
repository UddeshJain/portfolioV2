import express from 'express';
import React from 'react';
import { renderToNodeStream } from 'react-dom/server';
import { ServerLocation } from '@reach/router';
import fs from 'fs';
import App from '../src/index';

const PORT = process.env.PORT || 1234;

const html = fs.readFileSync('dist/index.html').toString();

const parts = html.split('not rendered');

const app = express();

app.use('/dist', express.static('dist'));
app.use((req, res) => {
  res.write(parts[0])
  const reactMarkup = (
    <ServerLocation url={req.url}>
      <App />
    </ServerLocation>
  );
  const stream = renderToNodeStream(reactMarkup)
  stream.pipe(
    res,
    { end: false }
  );
  stream.on("end", () => {
    res.write(parts[1]);
    res.end();
  });
});

console.log('Listing on ' + PORT);
app.listen(PORT);