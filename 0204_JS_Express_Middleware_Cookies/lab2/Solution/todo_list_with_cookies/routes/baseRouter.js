const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.render('welcome');
});

router.get('/newTodo', (req, res) => {
	res.render('newTodo');
});

router.post('/newTodo', (req, res) => {
	const params = req.body;
	res.cookie('todos', res.locals.todos.concat([params]));
	res.redirect('/');
});

module.exports = router;
