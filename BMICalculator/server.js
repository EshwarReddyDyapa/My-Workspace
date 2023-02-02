const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/styles.css', (req, res) => {
    res.sendFile(__dirname + '/styles.css');
});

app.post('/', (req, res) => {
    var height = Number(req.body.height);
    var weight = Number(req.body.weight);

    var heightM = height * 0.3048;

    var BMI = weight / (heightM * heightM);

    // console.log("heightM: " + heightM + "weight: " + weight);

    res.send("The BMI is: " + BMI);
});

app.listen(3000);