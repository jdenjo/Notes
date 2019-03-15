const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');

const app = express();
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Create our own custom middleware to get the values from the cookies
// And create a "global" variable that is available to all view template files
app.use((req, res, next) => {
	const name = req.cookies.name;
	const language = req.cookies.language;

	res.locals.name = name || '';
	// res.locals.language = language || '';
	switch (language) {
		case 'english':
			res.locals.greeting = 'Hello';
			break;
		case 'french':
			res.locals.greeting = 'Bonjour';
			break;
		case 'spanish':
			res.locals.greeting = 'Hola';
			break;
		default:
			res.locals.greeting = '';
	}
	next();
});

const baseRouter = require('./routes/baseRouter');
app.use('/', baseRouter);

const PORT = 8080;
const HOST = 'localhost';
app.listen(PORT, HOST, () => {
	console.log(`The server is listening at: http://${HOST}:${PORT} !`);
});
