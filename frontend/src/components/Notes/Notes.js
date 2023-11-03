import React from 'react';
import './Notes.css';
import Note from './Note/Note';
import NewNote from './NewNote/NewNote';
import EditNote from './EditNote/EditNote';
import Modal from 'react-modal';

class Notes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [
        {
          id: '34235',
          title: 'Oporządzić Molly',
          description: 'Sprzątnoć w klatce oraz dać jedzonko!',
        },
        {
          id: '56456',
          title: 'Oddać krew',
          description: 'Samochód do Czarnkowa od Magdy!',
        },
        {
          id: '56776',
          title: 'Zaprogramować notatnik',
          description: 'Twórca stron z YT w 8 lekcjach!',
        },
      ],
      showEditModal: false,
      editNote: {},
    };
  }

  deleteNote(id) {
    console.log('usuwanie notatki', id);
    const notes = [...this.state.notes].filter((note) => note.id !== id);
    this.setState({ notes });
  }

  addNote(note) {
    const notes = [...this.state.notes];
    notes.push(note);
    this.setState({ notes });
  }

  editNote(note) {
    const notes = [...this.state.notes];
    const index = notes.findIndex((x) => x.id === note.id);
    if (index >= 0) {
      notes[index] = note;
      this.setState({ notes });
    }
    this.toggleModal();
  }
  toggleModal() {
    this.setState({ showEditModal: !this.state.showEditModal });
  }

  editNoteHandler(note) {
    this.toggleModal();
    this.setState({ editNote: note });
  }
  render() {
    return (
      <div className="notes-container">
        <h1 className="notes-title">Moje notatki:</h1>

        <NewNote onAdd={(note) => this.addNote(note)} />

        <Modal isOpen={this.state.showEditModal} contentLabel="Edytuj notatkę">
          <EditNote
            title={this.state.editNote.title}
            description={this.state.editNote.description}
            id={this.state.editNote.id}
            onEdit={(note) => this.editNote(note)}
          />
          <button onClick={() => this.toggleModal()}>Anuluj</button>
        </Modal>

        {this.state.notes.map((note) => {
          return (
            <Note
              title={note.title}
              description={note.description}
              id={note.id}
              onEdit={(note) => this.editNoteHandler(note)}
              onDelete={(id) => this.deleteNote(id)}
            />
          );
        })}
      </div>
    );
  }
}

export default Notes;
