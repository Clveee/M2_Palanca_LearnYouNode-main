const http = require('http');
const url = process.argv[2];

let responseData = '';

http.get(url, (response) => {
    response.setEncoding('utf8');

    response.on('data', (chunk) => {
        responseData += chunk;
    });

    response.on('end', () => {
        console.log(responseData.length);
        console.log(responseData);
    });

    response.on('error', (err) => {
        console.error(`Error: ${err.message}`);
    });
});
