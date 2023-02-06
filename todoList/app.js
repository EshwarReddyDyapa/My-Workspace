const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

const options = { month: 'short', day: 'numeric', weekday: 'long'}

let dateToDisplay;
let date = new Date();

dateToDisplay = date.toLocaleDateString('en-IN', options);

var items = ['First item', 'Second ToDo item'];
let workItems = [];

app.get('/', (req,res) => {
    res.render('index', {listItem: items, dateToDisplay: dateToDisplay});
});

app.get('/work', (req,res) => {
    res.render('index', {listItem: workItems, dateToDisplay: 'Work - ToDo'});
});

app.get('/about', (req,res) => {
    res.render('about');
})

app.post('/', (req,res) => {
    console.log(req.body);
    if(req.body.button === 'Work - ToDo '){
        workItems.push(req.body.listItem);
        //res.render('index', {listItem: workItems, dateToDisplay: 'Work - ToDo'});
        res.redirect('/work');
    }
    else{
        items.push(req.body.listItem);
        res.redirect('/');
    }
});

app.listen(3000, () =>{
    console.log("Server runnning on port 3000");
});