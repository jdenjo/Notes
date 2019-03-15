const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.render('welcome');
});

router.get('/language', (req, res) => {
	res.render('languageForm');
});

const COOKIE_MAX_AGE = 1000 * 60 * 60 * 24 * 7;
router.post('/select_language', (req, res) => {
	// In this route we want to get the data from our submitted form
	const params = req.body;
	// Then we want to set cookies based on that data
	const name = params.name;
	res.cookie('name', name, { maxAge: COOKIE_MAX_AGE });
	res.cookie('language', params.language, { maxAge: COOKIE_MAX_AGE });

	// We could have done this creating only one cookie
	// res.cookie(
	// 	'preferences',
	// 	{ name: name, language: params.language },
	// 	{ maxAge: COOKIE_MAX_AGE },
	// );
	// And finally, redirect the user somewhere...
	res.redirect('/');
});

module.exports = router;
