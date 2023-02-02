const express = require('express');
const app = express();
app.use(express.urlencoded({extended: true}));

app.get('/', (req,res) => {
    // res.send('Get success');
    res.sendFile(__dirname + '/index.html');
});

app.get('/images/bootstrap-logo.svg', (req,res) => {
    res.sendFile(__dirname + '/images/bootstrap-logo.svg')
});

app.get('/styles.css', (req, res) => {
    res.sendFile(__dirname + '/styles.css');
});

app.post('/', (req,res) => {
    console.log("Received");
    const email = req.body.email;
    const password = req.body.password;
    // console.log('Email: ' + email + ',' + ' Password:' + password);
    // console.log('checkbox value: ' + req.body.remCheckBox);
    // res.send("Received");

    // This part contains the code to make a POST request to MAILCHIMP and add the above details (email, firstName, LastName)
    //TO-DO
});

app.listen(3000, () => {
    console.log('Server started on port 3K');
});
