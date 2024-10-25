import React, { useState } from 'react';
import { TEXT_AREA, TEXT_INPUT } from '../../constants';

export default function TextInput({ type, placeholder, onChange, onBlur, inputBox, validation = false, value, customValidation}) {
    const [formValue, setValue] = useState('');
    const [error, setError] = useState('');

    const handleChange = (event) => {
        const value = event.target.value;
        setValue(value);

        if (onChange) {
            onChange(value);
        }

        if (validation) {
            if (customValidation && !customValidation(value)) {
                setError('Invalid input');
            } else if (!customValidation && value.trim() === '') {
                setError('Input cannot be empty');
            } else {
                setError('');
            }
        }
    };

    const handleBlur = (event) => {
        if (onBlur) {
            onBlur(event);
        }
    };

    return (
        <React.Fragment>
            {inputBox === TEXT_INPUT ?
                <input
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="input border-solid border-2 border-gray-400 bg-white input-bordered w-full max-w-lg"
                /> :
                inputBox === TEXT_AREA ?
                    <textarea
                        className="textarea textarea-bordered border-solid border-2 border-gray-400 bg-white w-full max-w-lg"
                        placeholder={placeholder}
                        value={value}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    ></textarea> : null}
            {/* {error && <span className="error">{error}</span>} */}
        </React.Fragment>
    );
}
