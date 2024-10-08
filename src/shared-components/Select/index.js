import React, { useEffect, useState } from 'react';

export default function Select({ options, validation = false, customValidation, onChange }) {
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
        <div>
            <select
                className="select select-bordered w-full max-w-xs"
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
        </div>
    );
}
