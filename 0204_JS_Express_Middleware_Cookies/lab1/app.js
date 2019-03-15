const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// custom middleware that does every time a server request is made
app.use((request, response, next) => {
    
    //shows on the server what the cookies are right now
    console.log('cookies:', request.cookies);
    
    // take the cookie variables and make them local variables
	const username = request.cookies.username;
    const language = request.cookies.language;

    // these local variables are available to any route
	response.locals.username = username || '';
    response.locals.language = language || '';

    // must have next() if its a custom middleware
	next();
});

//this ties in the routes from the baseRouter file
const baseRouter = require('./routes/baseRouter');
app.use('/', baseRouter);

// server data
const PORT = 4545;
const HOST = 'localhost'; // 127.0.0.1
app.listen(PORT, HOST, () => {
	console.log(`Server is listening at http://${HOST}:${PORT}`);
});
