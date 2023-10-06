const Note = require('../../db/models/note');

class NoteActions {
  saveNote(req, res) {
    const newNote = new Note({
      title: 'zrobić zakupy',
      body: 'mleko, jajka, woda ',
    });
    newNote.save().then(() => {
      console.log('notatka została zapisana');
    });

    res.send('Strona Główna Działa!');
  }

  getAllNotes(req, res) {
    res.send('');
  }
  getNote(req, res) {
    res.send('..');
  }
  updateNote(req, res) {
    res.send('..');
  }
  deleteNote(req, res) {
    res.send('..');
  }
}

module.exports = new NoteActions();
