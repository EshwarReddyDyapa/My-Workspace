const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}));

app.get('/', (req,res) => {
    res.send("<h1>Get response Success</h1>");
});

app.listen(3000, () =>{
    console.log("Server runnning on port 3000");
});