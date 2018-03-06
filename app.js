const express = require('express');
const httpProxy = require('http-proxy');
const path = require('path');

const app = express();
const apiProxy = httpProxy.createProxyServer();
app.use(express.static(path.join(__dirname, 'public')));

const image = 'http://localhost:3003';
const description = 'http://localhost:3001';
const similar = 'http://localhost:3000';
const review = 'http://localhost:1337';

app.all('/item/1/images', (req, res) => {
  apiProxy.web(req, res, { target: image });
});

// app.all('/app2/*', (req, res) => {
//   console.log('redirecting to description');
//   apiProxy.web(req, res, { target: description });
// });

// app.all('/app2/*', (req, res) => {
//   console.log('redirecting to similar');
//   apiProxy.web(req, res, { target: similar });
// });

// app.all('/app2/*', (req, res) => {
//   console.log('redirecting to review');
//   apiProxy.web(req, res, { target: review });
// });

app.listen(3333, () => { console.log('listening on port 3333'); });
