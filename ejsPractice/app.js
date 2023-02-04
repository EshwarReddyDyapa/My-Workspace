const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.get('/', (req,res) => {
    var today = new Date();
    var weekDay = today.getDay();
    var actualDay = '';

    // console.log(weekDay);

    switch (weekDay) {
        case 0:
            actualDay = "Sunday";
            break;
        case 1:
            actualDay ='Monday';
            break;
        case 2:
            actualDay = 'Tuesday';
            break;
        case 6:
            actualDay = 'Saturday'
            break;
        default:
            break;
    }

    res.render('index', {weekDay: actualDay});

});

app.listen(3000, () => {
    console.log("Server running on port 3000");
})