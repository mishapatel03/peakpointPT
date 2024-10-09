import React, { useState } from 'react';

export default function Select({ options, validation = false, customValidation, onChange, size }) {
    const [selectedValue, setSelectedValue] = useState(options[0] || '');
    const [error, setError] = useState('');

    const handleChange = (event) => {
        const value = event.target.value;
        setSelectedValue(value);

        if (validation) {
            if (customValidation && !customValidation(value)) {
                setError('Invalid selection');
            } else if (!customValidation && value === 'Select an option') {
                setError('Please select a valid option');
            } else {
                setError('');
            }
        }

        if (onChange) {
            onChange(value);
        }
    };

    return (
        <React.Fragment>
            <select
                className={`select select-bordered w-full ${size !== undefined ? size : "max-w-lg"}`}
                value={selectedValue}
                onChange={handleChange}
            >
                <option disabled>Select an option</option>
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            {error && <span className="error">{error}</span>}
        </React.Fragment>
    );
}
