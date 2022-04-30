import React, {  useState } from "react";
import "./todo-list-item.css";


const TodoListItem = (props) => {
  console.log("TodoListItem render");
  const [important, setImportant] = useState(props["important"] || false);
  const [Done, setDone] = useState(false);

  const style = {
    color: important ? "steelblue" : "black",
    fontWeight: important ? "bold" : "normal",
    textDecoration: !Done ? "none" : "line-through",
  };
  const handleDoneToggle = () => {
    setDone((v) => !v);
  };
  const handleImportantToggle = () => {
    setImportant((v) => !v);
  };

  return (
    <div className="todo-list-item">
      <span
        className="todo-list-item-label"
        style={style}
        onClick={handleDoneToggle}
      >
        {props.label}
      </span>

      <button
        type="button"
        className="btn btn-outline-success btn-sm float-right"
        onClick={handleImportantToggle}
      >
        <i className="fa" />
      </button>

      <button
        type="button"
        className="btn btn-outline-danger btn-sm float-right"
        onClick={props.onDeleted}
      >
        <i className="fa" />
      </button>
    </div>
  );
};

export default TodoListItem;
