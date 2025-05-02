import React from "react";

function Note(props) {
  return (
    <div className="note max-w-sm rounded hover:shadow-lg shadow-md hover:bg-pink-200 transition duration-300 ease-in-out p-4 m-2 hover:cursor-pointer">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
    </div>
  );
}

export default Note;
