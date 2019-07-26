// const http = require('http');
//
// const server = http.createServer((req, res) => {
//   console.log('method', req.method);
//   console.log('url', req.url);
//   const user = {
//     name: 'John',
//     hobby: 'Drawing'
//   }
//   res.setHeader('Content-Type', 'application/json')
//   res.end(JSON.stringify(user))
// })
//
// server.listen(3000)

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  const user = {
    name: 'Sally',
    hobby: 'Soccer'
  }
  res.send(user);
})

app.post('/profile', (req, res) => {
  console.log(req.body);
  res.send('success')
})

app.listen(3000);
