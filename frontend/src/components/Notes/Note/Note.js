import React, { useState } from 'react';
import '../Notes.css';

function Note(props) {
  const [showDesc, setShowDesc] = useState(false);
  const toggleDesc = () => {
    setShowDesc(!showDesc);
  };

  const editHandler = () => {
    props.onEdit({
      title: props.title,
      description: props.description,
      _id: props.id,
    });
  };

  return (
    <div className="note">
      <p onClick={toggleDesc} className="note-title">
        {props.title}
      </p>
      {showDesc && <div className="description">{props.description}</div>}
      <button className="button" onClick={editHandler}>
        edytuj
      </button>
      <button
        className="button delete"
        onClick={() => props.onDelete(props.id)}
      >
        usuń
      </button>
    </div>
  );
}

export default Note;
