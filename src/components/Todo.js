//===========//
//  IMPORTS  //
//===========//
import React from "react";

const Todo = (props) => {
  return (
    <div //if completed true - add completed to the class
      className={`item${props.item.completed ? " completed" : ""}`}
      onClick={() => props.toggleItem(props.item.id)}
    >
      <p>{props.item.name}</p>
    </div>
  );
};

export default Todo;
