const express = require('express');
const knex = require('../db/client'); // This allows us to interact with the database
const router = express.Router();

router.get('/', (req, res) => {
	res.render('welcome');
});

router.get('/notes/new', (req, res) => {
	res.render('newNote');
});

router.post('/notes', (req, res) => {
	const formData = req.body;
	knex('notes')
		.insert({ content: formData.content })
		.returning('*')
        .then()

    console.log(`added to db ${formData.content}`);
    
    res.render('welcome');
});


router.get('/notes', (req, res) => {
	// knex.select('*').from('posts').then(...) <- this works too, or we can just use the line below
	knex('notes')
		.orderBy('createdAt', 'desc')
		.then(notes => {
			// notice the res.render is within the callback to `.then`
			res.render('viewNotes', { notes: notes });
		});
});

router.delete('/notes/:id', (req, res) => {
	knex('notes')
		.where('id', req.params.id)
		.del()
		.then(() => {
            console.log("deleted");
			res.redirect('/notes');
		});
});

router.get('/notes/:id', (req, res) => {
    
    const id = req.params.id;
    
    knex('notes')
		.where('id', id)
		.first()
		.then(note => {
			// notice the res.render is within the callback to `.then`
			res.render('viewNote', { note: note });
		});
});


router.get('/notes/:id/edit', (req, res) => {
	knex('notes')
		.where('id', req.params.id)
		.first()
		.then(note => {
			res.render('edit', { note: note });
		});
});

router.patch('/notes/:id', (req, res) => {
	const updatedNote = {
		content: req.body.content,
	};
	knex('notes')
		.where('id', req.params.id)
		.update(updatedNote)
		.then(() => {
			res.redirect(`/notes/${req.params.id}`);
		});
});



module.exports = router;