const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));

var items = [];

app.get('/', (req,res) => {
    res.render('index', {listItem: items});
});

app.post('/', (req,res) => {
    // console.log(req.body.listItem);
    items.push(req.body.listItem);
    res.redirect('/');
})

app.listen(3000, () =>{
    console.log("Server runnning on port 3000");
});