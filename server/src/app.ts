import express, { Application } from 'express';

const app: Application = express();
const querystring = require('querystring');
const request = require('request');
const cors = require('cors');
app.use(
  cors({
    origin: 'http://localhost:3000'
  })
);


let url = 'https://www.whoisxmlapi.com/whoisserver/WhoisService?';
let parameters = {
  domainName: 'apollo.com',
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

/**
 * Hey really tried to get a query string passed in but was unsuccessful.
 * Kept getting an error of invalid URI
 */
// app.get('/getApiRequest', function (req, res) {
//   let whoisUrl = 'https://www.whoisxmlapi.com/whoisserver/WhoisService?'
//   let domainName = {
//     domainName: req.query.domainName,
//     apiKey: 'at_qLpgWjeDFgzUK0RAzTP3Wp3HM7FFr',
//   };
//   request.get(whoisUrl, {qs: domainName}, { json: true },
//     function (error: any, response: any, body: any) {
//       if (error) {
//         console.log('error:', error);

//     } else if(response && body) {
//         console.log('statusCode:', response && response.statusCode); 
//         res.json({'body': body});
//     }
//     }
//   );
// });


app.listen(5000, () => console.log('Server Running'));
