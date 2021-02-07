import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CategorieAdd = ({setCategories}) => {
    const [inputValue, setInputValue] = useState("");

    const handdleInputChage = (event) => {
        setInputValue(event.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            setCategories(categories => [...categories, inputValue]);
            setInputValue("");
        }
    }

    return (
        <form onSubmit={handleSubmit} className="form-group">
            <input type="text" name="categorieName"
                value={inputValue}
                onChange={handdleInputChage} />
        </form>
    );
}

CategorieAdd.protoTypes = {
    setCategories: PropTypes.func.isRequired
}

export default CategorieAdd;