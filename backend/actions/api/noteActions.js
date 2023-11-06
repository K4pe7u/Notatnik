const Note = require('../../db/models/note');

class NoteActions {
  async saveNote(req, res) {
    const title = req.body.title;
    const description = req.body.description;

    try {
      const note = new Note({
        title,
        description,
      });

      await note.save();

      res.status(201).json(note);
    } catch (err) {
      res.status(422).json({ message: 'Błąd zapisu notatki' });
    }
  }

  async getAllNotes(req, res) {
    const doc = await Note.find({});

    res.status(200).json(doc);
  }

  async getNote(req, res) {
    const id = req.params.id;
    const note = await Note.findOne({ _id: id });

    if (!note) {
      return res.status(404).json({ error: 'Notatka nie znaleziona' });
    }

    res.status(200).json(note);
  }

  async updateNote(req, res) {
    const id = req.params.id;
    const title = req.body.title;
    const description = req.body.description;

    const note = await Note.findOne({ _id: id });

    if (!note) {
      return res.status(404).json({ error: 'Notatka nie znaleziona' });
    }

    note.title = title;
    note.description = description;

    await note.save();

    res.status(201).json(note);
  }
  async deleteNote(req, res) {
    const id = req.params.id;
    await Note.deleteOne({ _id: id });

    res.status(204).json('Notatka usunięta poprawnie!');
  }
}

module.exports = new NoteActions();
