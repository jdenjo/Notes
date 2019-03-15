const express = require('express');
const logger = require('morgan');

const app = express();
// use ejs templates
app.set('view engine', 'ejs');
// use morgan logger
app.use(logger('dev'));

// app.get('/hello_world', (request, response) => {

//   response.send('<h1>Hello World</h1>');

// });

app.get('/car_status', (request, response) => {

    const params = request.query;
    const year = params.year;
    let ageStatus = "";
    
    if (year != ""){

        if (year > 2019){
            ageStatus = "future";
        }
        else if (year > 2015){
            ageStatus = "new";
        }
        else if (year > 2000){
            ageStatus = "old"
        }
        else {
            ageStatus = "very old"
        }
    }

    response.render('car_status', {
        year: year,
        ageStatus: ageStatus
    });
});

app.get('/random_person', (request, response) => {

    const params = request.query;
    let randomPerson = "";
    let names = "";
    
    if(params.names != null){

    names = params.names.split(",");
    randomNo = Math.floor((Math.random() * names.length) + 1);
    randomPerson = names[randomNo -1];

    }

    
    
    response.render('random_person', {
       randomPerson: randomPerson,
        names: names   });
});

// ------------
// RUN SERVER
// ------------
const PORT = 4545;
const HOST = 'localhost'; // 127.0.0.1
app.listen(PORT, HOST, () => {
  console.log(`Server is listening at http://${HOST}:${PORT}`);
});
