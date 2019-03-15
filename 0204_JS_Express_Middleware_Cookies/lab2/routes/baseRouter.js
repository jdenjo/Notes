const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
    // get the params from the post not the url params
    const params = request.body;
    response.render('home');
});

router.get('/list', (request, response) => {
	response.render('list');
});


router.post('/addTask', (req, res) => {
	const params = req.body;
    res.cookie('task', params.task);
	res.redirect('/');
});

module.exports = router;
