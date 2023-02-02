console.log("Test");
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("Hello World <br> <h1>Test for Nodemon</h1>");
    res.statusCode = 200;
});

app.get('/about', (req, res) => {
    res.send("<h1>This is an about page.</h1>" + 
             "<p>This page consists of about details</p>");
    res.statusCode = 200;
});

app.get('/htmlpage', (req, res) => {
    res.contentType = 'text/html';
    res.send("C:\\Users\\eshwa\\Desktop\\EshwarDyapa\\SimonGame\\index.html");
});

app.listen(3000); 