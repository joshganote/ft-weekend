import express, { Application, Request, Response } from 'express';

const app: Application = express();
const cors = require('cors');
app.use(
  cors({
    origin: 'http://localhost:3000'
  })
);
const querystring = require('querystring');
const request = require('request');

let url = 'https://www.whoisxmlapi.com/whoisserver/WhoisService?';
let parameters = {
  domainName: 'google.com',
  apiKey: 'at_qLpgWjeDFgzUK0RAzTP3Wp3HM7FFr',
  outputFormat: 'json'
};

url = url + querystring.stringify(parameters);

app.get('/getApiRequest', (req, res) => {
  makeApiCall(url)
    .then((response) => {
      res.json(response);
    })
    .catch((error) => {
      res.send(error);
    });
});

// passing url string in through here to make it readable
function makeApiCall(url: any) {
  return new Promise((resolve, reject) => {
    request(url, { json: true }, (err: any, res: any, body: any) => {
      if (err) reject(err);
      resolve(body);
    });
  });
}

app.listen(5000, () => console.log('Server Running'));
