import React, { ChangeEvent, useState } from "react";
import PropTypes from "prop-types";
import './AddCategory.css';

interface Category{
    setCategories: Function;
}

export const AddCategory = ( { setCategories }: Category ) => {

    const [inputValue, setInputValue] = useState('');

    //handle
    const handleInputChange = (e:ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleAdd = () => {

    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setCategories((cast:string[]) => [inputValue, ...cast]);
    };

    return (
        <form className="form-group" onSubmit={ handleSubmit }>
            <div className="input-group mb-3">
                <input
                    className="form-control"
                    type="text"
                    value={inputValue}
                    onChange={  handleInputChange }/>
                <button className="btn btn-outline-secondary" onClick={handleAdd}>Seach 🔎</button>
            </div>
        </form>
    );
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}