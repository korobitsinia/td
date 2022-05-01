import React, {useState} from "react";
import "./item-add-form.css";

const ItemAddForm = ({addItem}) => {

    const [label, setLabel] = useState("");

    function onLabelChange(e) {
        setLabel(e.target.value);
    }

    function onSubmit(e) {
        e.preventDefault();
        addItem(label);
        setLabel("");
    }

    return (
        <form className={"item-add-form d-flex"}
              onSubmit={onSubmit}
        >
            <input type="text"
                   className="form-control"
                   placeholder={"enter new task"}
                   onChange={onLabelChange}
                   value={label}
            />

            <button
                className={"btn btn-outline-secondary"}
                type={"submit"}

            >Add
            </button>
        </form>
    );
};

export default ItemAddForm;