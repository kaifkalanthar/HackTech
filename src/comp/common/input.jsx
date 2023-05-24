import { errors } from 'joi-browser';
import React from 'react';

const Input = ({ label, type, name, onChange, error }) => {
    return (
        <div className="input-container ic1">
            <input id="firstname"
                className="input"
                type={type}
                placeholder=" "
                name={name}
                onChange={onChange} />
                {error&&<div className="alert">{error[name]}</div>}
            <div className="cut"></div>
            <label for="firstname" className="placeholder">{label}</label>
        </div>
    );
}

export default Input;