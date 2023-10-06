const express = require('express');
const router = express.Router();

const noteActions = require('../actions/api/noteActions');

// pobieranie notatek
router.get('/notes', noteActions.getAllNotes);
// pobieranie notatek
router.get('/notes/:id', noteActions.getNote);
// zapisywanie notatek
router.post('/notes', noteActions.saveNote);
// edytowanie notatek
router.put('/notes', noteActions.updateNote);
// usuwanie notatek
router.delete('/notes', noteActions.deleteNote);
module.exports = router;
