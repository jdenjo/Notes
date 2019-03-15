const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
    // get the params from the post not the url params
    const params = request.body;
    const language = params.language;
    response.render('home');
});

router.get('/language', (request, response) => {
	response.render('language');
});

// posts the language to a middle page that collects the params
// and then makes global for home to use
router.post('/select_language', (req, res) => {
	const params = req.body;
    // res.cookie('username', params.username, { maxAge: COOKIE_MAX_AGE });
    res.cookie('language', params.language);
    res.cookie('username', params.username);
	res.redirect('/');
});

module.exports = router;
