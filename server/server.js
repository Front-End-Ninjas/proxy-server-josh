const express = require('express');
const path = require('path');
const item = require('./routes');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));
app.use('/item', item);

app.listen(8080, () => { console.log('listening on port 8080'); }); // eslint-disable-line no-console
