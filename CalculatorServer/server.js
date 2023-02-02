const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post('/', (req, res) => {
    var n1 = Number(req.body.num1);
    var n2 = Number(req.body.num2);

    var result = n1 + n2;

    res.statusCode = 200;
    res.send("The result is: " + result);
});

app.get('/index.js', (req, res) => {
    res.sendFile(__dirname + "/index.js");
});

app.get('/styles.css', (req, res) => {
    res.sendFile(__dirname + "/styles.css");
});

app.listen(3000);