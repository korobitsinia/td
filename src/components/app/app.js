import React, { useState } from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";

import "./app.css";

const App = () => {
  const [todoData, setTodoData] = useState([
    { label: "Drink Coffee", important: false, id: 1 },
    { label: "Make Awesome App", important: true, id: 2 },
    { label: "Have a lunch", important: false, id: 3 },
  ]);
  function deleteItem(id) {
    // const newData = todoData.filter((item)=>item.id !== id)
    const idx = todoData.findIndex((el) => el.id === id);
    const before = todoData.slice(0, idx);
    const after = todoData.slice(idx + 1);
    setTodoData((oldData) => [...before, ...after]);
  }
  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={3} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>

      <TodoList todos={todoData} onDeleted={deleteItem} />
    </div>
  );
};

export default App;
