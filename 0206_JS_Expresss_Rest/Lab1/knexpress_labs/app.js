const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');

const app = express();
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use((req, res, next) => {
	const todos = req.cookies.todos;
	res.locals.todos = todos || [];
	next();
});


// METHOD OVERRIDE
app.use(
	methodOverride((req, res) => {
		if (req.body && req.body._method) {
			const method = req.body._method;
			return method;
		}
	}),
);

const baseRouter = require('./routes/baseRouter');
app.use('/', baseRouter);

const PORT = 5000;
const HOST = 'localhost';
app.listen(PORT, HOST, () => {
	console.log(`The server is listening at: http://${HOST}:${PORT}`);
});


