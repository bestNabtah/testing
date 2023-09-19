const http = require('http');

const options = {
    hostname: '127.0.0.1',
    port: 8080,
    path: '/notify',
    method: 'GET'
  };
  

const req = http.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`);
});

req.on('error', error => {
  console.error(error);
});

req.end();