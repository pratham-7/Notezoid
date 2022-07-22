import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';

function Note(props) {

  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note" contenteditable="true">
      <p >
      <h1>{props.title}</h1>
      <p>{props.content}</p></p>
      <button onClick={handleClick}><DeleteIcon /></button>
    </div>
  );
}

export default Note;
