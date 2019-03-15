// add the main libraries for express, cookies and logging
const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');

// initiate the libraries 
const app = express();
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// this is custom middleware to 
// push variables and cookies between routes
app.use((req, res, next) => {
    const field = req.cookies.field;
    
    //creates global variables available to all sites
    res.locals.field = field || "";
    
    // make a new global variable with biz logic
    res.locals.newMessage = "Text inputted was " + field;
    
	next();
});

// add the router file that runs the routes
const baseRouter = require('./routes/baseRouter');
app.use('/', baseRouter);

// Server setup and ports
const PORT = 5000;
const HOST = 'localhost';
app.listen(PORT, HOST, () => {
	console.log(`The server is listening at: http://${HOST}:${PORT}`);
});