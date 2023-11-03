import React, { useState } from 'react';

function EditNote(props) {
  const [title, setTitle] = useState(props.title);
  const [desc, setDesc] = useState(props.description);

  const changeTitleHandler = (event) => {
    const value = event.target.value;
    setTitle(value);
  };
  const changeDescHandler = (event) => {
    const value = event.target.value;
    setDesc(value);
  };

  const editNote = () => {
    const note = {
      title: title,
      description: desc,
      id: props.id,
    };

    props.onEdit(note);
  };

  return (
    <div className="note">
      <label>Tytuł:</label>
      <input type="text" value={title} onChange={changeTitleHandler} />
      <label>Opis:</label>
      <input type="text" value={desc} onChange={changeDescHandler} />

      <button className="button edit" onClick={() => editNote()}>
        Zapisz
      </button>
    </div>
  );
}

export default EditNote;
