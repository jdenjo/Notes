const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');

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

const baseRouter = require('./routes/baseRouter');
app.use('/', baseRouter);

const PORT = 5000;
const HOST = 'localhost';
app.listen(PORT, HOST, () => {
	console.log(`The server is listening at: http://${HOST}:${PORT}`);
});
