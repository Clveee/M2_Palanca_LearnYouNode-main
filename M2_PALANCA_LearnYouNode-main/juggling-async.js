const http = require('http');

const urls = process.argv.slice(2);
let responses = [];
let completedRequests = 0;

function getURLData(url, index) {
    http.get(url, (response) => {
        let data = '';
        response.setEncoding('utf8');

        response.on('data', (chunk) => {
            data += chunk;
        });

        response.on('end', () => {
            responses[index] = data;
            completedRequests++;

            if (completedRequests === urls.length) {
                responses.forEach((response) => {
                    console.log(response);
                });
            }
        });

        response.on('error', (err) => {
            console.error(`Error: ${err.message}`);
        });
    });
}

urls.forEach((url, index) => {
    getURLData(url, index);
});
