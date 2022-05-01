import React, {useEffect, useId, useState} from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";

import "./app.css";
import ItemAddForm from "../item-add-form";

let lastId = 1;

function idGenerator() {
    lastId++;
    return lastId;
};

const App = () => {
    const [todoData, setTodoData] = useState([
        createTodoItem("Drink Coffee"),
        createTodoItem("Make Awesome App"),
        createTodoItem("Have a lunch"),
    ]);

    const [searchQuery,setSearchQuery] = useState('')


    function createTodoItem(text) {
        return {
            id: idGenerator(), label: text, important: false, done: false,
        };
    }

    function deleteItem(id) {
        // const newData = todoData.filter((item)=>item.id !== id)
        const idx = todoData.findIndex((el) => el.id === id);
        setTodoData((prev) => [
            ...todoData.slice(0, idx),
            ...todoData.slice(idx + 1),
        ]);
    }

    function addItem(text) {
        const newItem = createTodoItem(text);
        setTodoData((prev) => [
            ...todoData,
            newItem,
        ]);
    }

    function onToggleImportant(id) {
        let newArray = toggleProperty(todoData, id, "important");
        setTodoData((prev) => newArray);
    }

    function onToggleDone(id) {
        const newArray = toggleProperty(todoData, id, "done");
        setTodoData((prev) => newArray);
    }

    function toggleProperty(arr, id, propName) {
        const idx = arr.findIndex((el) => el.id === id);
        const newArray = [...arr];
        newArray[idx][propName] = !newArray[idx][propName];
        return newArray;
    }




    const changeQuery = (text) => {
        setSearchQuery(prev=>text)
    }

    const searchFilter = ()=>{
        if(searchQuery.length===0) {
            return  todoData
        }
        return todoData.filter((el)=>el.label.indexOf(searchQuery))
    }

    const doneCount = todoData.filter((el) => el.done === true).length;
    const todoCount = todoData.filter((el) => el.done === false).length;
    const visibleItems = searchFilter()

    console.log(searchQuery,visibleItems)
    return (
        <div className="todo-app">

            <AppHeader toDo={todoCount} done={doneCount}/>
            <div className="top-panel d-flex">
                <SearchPanel changeQuery={changeQuery}/>
                <ItemStatusFilter/>
            </div>

            <TodoList
                todos={visibleItems}
                onDeleted={deleteItem}
                onToggleImportant={onToggleImportant}
                onToggleDone={onToggleDone}
            />
            <ItemAddForm addItem={addItem}/>

        </div>
    );
};

export default App;
