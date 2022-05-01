import React, {useState} from "react";
import "./todo-list-item.css";

const TodoListItem = ({label, done, important, onDeleted, onToggleImportant, onToggleDone}) => {

    const style = {
        color         : important ? "steelblue" : "black",
        fontWeight    : important ? "bold" : "normal",
        textDecoration: !done ? "none" : "line-through",
    };

    return (<div className="todo-list-item">
      <span
          className="todo-list-item-label"
          style={style}
          onClick={onToggleDone}
      >
        {label}
      </span>

        <button
            type="button"
            className="btn btn-outline-success btn-sm float-right"
            onClick={onToggleImportant}
        >
            <i className="fa"/>
        </button>

        <button
            type="button"
            className="btn btn-outline-danger btn-sm float-right"
            onClick={onDeleted}
        >
            <i className="fa"/>
        </button>
    </div>);
};

export default TodoListItem;
