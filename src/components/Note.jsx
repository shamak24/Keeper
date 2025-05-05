import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function Note(props) {

  function handleClick(){
    props.onDelete(props.id);
  }

  return (
    <div className="note max-w-sm rounded hover:shadow-lg shadow-md hover:bg-pink-200 transition duration-300 ease-in-out p-4 m-2 hover:cursor-pointer">
        <h1 className="font-bold">{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={handleClick}>
          <DeleteIcon />
        </button>
    </div>
  );
}

export default Note;
