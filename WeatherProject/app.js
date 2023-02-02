const https = require('https');
// const bodyParser = require('body-parser');
const express = require('express');

const app = express();
app.use(express.urlencoded({extended: true}));

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/styles.css', (req,res) => {
    res.sendFile(__dirname + '/styles.css');
});

app.post('/', (req, res) => {
    const cityName = req.body.cityName;
    console.log(cityName);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=6cc36e1b6114568d9f25a678c06c55cc&units=metric`;
    https.get(url, (response) => {

        //--------------------------------------------------------------------------------------------
        //To receive HTML code as API response and send using res.send() (change API params)
        //--------------------------------------------------------------------------------------------
        // console.log(response);
        // var htmlData = '';
        // response.on('data', (d) => {
        //     htmlData += d;
        // });
        // response.on('end', () => {
        //     res.send(htmlData);
        // });
        //--------------------------------------------------------------------------------------------
        //--------------------------------------------------------------------------------------------


        //--------------------------------------------------------------------------------------------
        //To send the JSON data to the client.
        //--------------------------------------------------------------------------------------------
        // app.get('/', (req, res) => {
        //     const url = "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=6cc36e1b6114568d9f25a678c06c55cc";
        //     https.get(url, (response) => {
        //         var data = '';
        //         response.on('data', (d) => {
        //             data += d;
        //         });
        //         response.on('end', () => {
        //             const dataJson = JSON.parse(data);
        //             res.json(dataJson);
        //         });
        //     });
        //     res.json(response);
        // });
        //--------------------------------------------------------------------------------------------
        //--------------------------------------------------------------------------------------------

        
        
        //--------------------------------------------------------------------------------------------
        //To send the data obtained from api as json, find weather[0].description from JSON data and send to client.
        //--------------------------------------------------------------------------------------------
        //--------------------------------------------------------------------------------------------
        // v2.0 - Send multiple lines back to the client, one with weather description and another with image
        //--------------------------------------------------------------------------------------------
        response.on('data', (d) => {
            const weatherData = JSON.parse(d);
            const weatherDescription = weatherData.weather[0].description;
            const responseCode = "The current weather in " + weatherData.name + " is: " + weatherDescription;
            var icon = weatherData.weather[0].icon;
            const imageURL = 'http://openweathermap.org/img/wn/' + icon + '@2x.png';
            const temparature = 'Temparature is currently: ' +  weatherData.main.temp + ' degrees celcius';
            // res.write(`<img src=${imageURL}>`);
            // res.write(weatherData.name);
            res.write(`<h1>${responseCode}</h1>`);
            res.write(`<p>${temparature}</p>`)
            res.write(`<img src=${imageURL}>`);
            res.send();
        });
        //--------------------------------------------------------------------------------------------
        //--------------------------------------------------------------------------------------------

    });
});

app.listen(3000, () => {
        console.log("Server listening on port 3000");
});