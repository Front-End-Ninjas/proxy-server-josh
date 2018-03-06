const express = require('express');
const request = require('request');
const port = require('./port.js');

const item = express.Router();

// const images = 3003;
// const description = 3001;
// const similar = 3000;
// const reviews = 1337;

item.route('/:id/:service')
  .get ((req, res) => request({
    url: `http://localhost:${port[req.params.service]}/item${req.url}`,
    method: 'GET',
}).pipe(res));

module.exports = item;
