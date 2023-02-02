const fs = require('fs');
const path = require('path');
const http = require('http');

const hostname = '192.168.0.126';
const port = 3000;

const ser = http.createServer((req, res) => {
	let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);
    let extname = path.extname(filePath);
    let contentType = 'text/html';

    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
    }

    if (contentType == 'text/html' && extname == '') filePath += '.html';
    if (contentType == 'text/css' && extname == '') filePath += '.css';
    if (contentType == 'text/javascript' && extname == '') filePath += '.js';

    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(404);
            res.end(`404 Not Found : ${filePath}`);
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

ser.listen(port);
