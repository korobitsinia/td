import React, {useState} from "react";

import "./item-status-filter.css";

const ItemStatusFilter = ({filter,handleFilterChange}) => {

    const buttons = [
        {name: "all", label: "All"},
        {name: "active", label: "Active"},
        {name: "done", label: "Done"},
    ];

    return (
        <div className="btn-group">
            {buttons.map((button, idx) => (
                <button type="button"
                        className={`btn btn-outline-secondary ${
                            filter === button.name
                                ? "btn-info"
                                : null}`}
                        key={idx}
                        onClick={()=>handleFilterChange(button.name)}
                >
                    {button.label}
                </button>
            ))}

        </div>
    );
};

export default ItemStatusFilter;
