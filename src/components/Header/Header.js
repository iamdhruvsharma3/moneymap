// src/components/Header/Header.js

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <h1>MoneyMap</h1>
            <p>Your personal finance tracker</p>
            <nav className="navbar">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/transactions">Transactions</Link></li>
                    <li><Link to="/analytics">Analytics</Link></li>
                    <li><Link to="/settings">Settings</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/signup">Sign Up</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
