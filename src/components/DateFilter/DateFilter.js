// src/components/DateFilter/DateFilter.js

import React from 'react';
import './DateFilter.css';

const DateFilter = ({ startDate, endDate, onDateChange }) => {
    return (
        <div className="date-filter">
            <h3>Filter by Date</h3>
            <div className="date-range">
                <input
                    type="date"
                    value={startDate}
                    onChange={(e) => onDateChange(e.target.value, endDate)}
                    className="date-input"
                />
                <span> to </span>
                <input
                    type="date"
                    value={endDate}
                    onChange={(e) => onDateChange(startDate, e.target.value)}
                    className="date-input"
                />
            </div>
        </div>
    );
};

export default DateFilter;
