import React from 'react';

export default function Dropdown({ summary, items, onItemClick }) {
    return (
        <details className="dropdown">
            <summary className="btn m-1">{summary}</summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                {items.map((item, index) => (
                    <li key={index}>
                        <a onClick={() => onItemClick(item)}>{item}</a>
                    </li>
                ))}
            </ul>
        </details>
    );
}
