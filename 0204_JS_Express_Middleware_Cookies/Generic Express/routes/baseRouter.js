const express = require('express');
const router = express.Router();

// this routes to the home page
router.get('/', (req, res) => {
	res.render('index');
});

// this routes to a new page
router.get('/formPage', (req, res) => {
	res.render('formPage');
});

// this routes to the new page posting variables
router.post('/formPost', (req, res) => {
	const params = req.body;
	res.cookie('field', params.field);
	res.redirect('/');
});

//exports to the app.js file
module.exports = router;
 
