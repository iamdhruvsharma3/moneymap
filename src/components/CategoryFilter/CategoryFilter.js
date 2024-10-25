// src/components/CategoryFilter/CategoryFilter.js

import React from 'react';
import './CategoryFilter.css';

const CategoryFilter = ({ categories = [], selectedCategory, onCategoryChange }) => {
    return (
        <div className="category-filter">
            <h3>Filter by Category</h3>
            <select 
                value={selectedCategory} 
                onChange={(e) => onCategoryChange(e.target.value)} 
                className="category-select"
            >
                <option value="">All Categories</option>
                {categories.map((category, index) => (
                    <option key={index} value={category}>
                        {category}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CategoryFilter;
