const express = require('express');
const request = require('request');
const path = require('path');
const item = require('./routes');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use('/item', item);

app.listen(8080, () => { console.log('listening on port 8080'); });


// const express = require('express');

// const app = express();

// app.get('/app1', (req, res) => {
//   res.send('Hello world From Server 1');
// });

// app.get('/app2', (req, res) => {
//   res.send('Hello world From Server 2');
// });

// app.get('/app3', (req, res) => {
//   res.send('Hello world From Server 3');
// });

// app.listen(8080, () => { console.log('listening on port 8080'); });
