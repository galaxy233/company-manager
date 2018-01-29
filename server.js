const path = require('path');
const express = require('express');
const proxy = require('http-proxy-middleware');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, './public')));

app.use('/api', proxy({
  target: 'http://devapp.telenotes.com',
  changeOrigin: true,
  logLevel: 'debug',
  onError: function(err, req, res) {
    console.log(err)
    res.end()
  }
}))

app.listen(3000);
