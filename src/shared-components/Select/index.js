import React from 'react';
import { useDispatch } from 'react-redux';

export default function Select({ options, field, value, onChange, size }) {
    const dispatch = useDispatch();

    const handleChange = (event) => {
        const selectedValue = event.target.value;
        if (onChange) {
            onChange(selectedValue);
        }
    };


    return (
        <React.Fragment>
            <select
                className={`select border-solid border-2 border-gray-400 bg-white select-bordered w-full ${size || 'w-full'}`}
                value={value || ''}
                onChange={handleChange}
            >
                <option value="" disabled>Select an option</option>
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </React.Fragment>
    );
}
