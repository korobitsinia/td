import React, {useState} from "react";

import "./search-panel.css";

const SearchPanel = ({changeQuery}) => {

    const [inputVal, setInputVal] = useState("");

    function handleChange(e) {
        setInputVal(e.target.value);
        changeQuery(e.target.value);
    }

    return (
        <input type="text"
               className="form-control search-input"
               placeholder="type to search"
               value={inputVal}
               onChange={handleChange}
        />
    );
};

export default SearchPanel;
