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

    const [searchQuery, setSearchQuery] = useState("");

    const changeQuery = (text) => {
        setSearchQuery(text);
    };

    const search = () => {
        if (searchQuery.length === 0) {
            return todoData;
        }
        return todoData.filter((el) => el.label.toLowerCase()
                                         .includes(searchQuery.toLowerCase()));
    };

    const [filter, setFilter] = useState("active");

    function handleFilter(array, text) {
        switch (text) {
            case "all":
                return array;
            case "active":
                return array.filter((el) => el.done === false);
            case "done":
                return array.filter((el) => el.done === true);
        }
    }

    function handleFilterChange(text) {
        setFilter(text);
    }

    const doneCount = todoData.filter((el) => el.done === true).length;
    const todoCount = todoData.filter((el) => el.done === false).length;
    const arrayAfterSearch = search();
    const arrayAfterSearchAndFilter = handleFilter(arrayAfterSearch, filter);

    return (
        <div className="todo-app">

            <AppHeader toDo={todoCount} done={doneCount}/>
            <div className="top-panel d-flex">
                <SearchPanel changeQuery={changeQuery}/>
                <ItemStatusFilter filter={filter} handleFilterChange={handleFilterChange}/>
            </div>

            <TodoList
                todos={arrayAfterSearchAndFilter}
                onDeleted={deleteItem}
                onToggleImportant={onToggleImportant}
                onToggleDone={onToggleDone}
            />
            <ItemAddForm addItem={addItem}/>

        </div>
    );
};

export default App;
