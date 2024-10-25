// src/components/Analytics/Analytics.js

import React from 'react';
import './Analytics.css';

const Analytics = ({ transactions }) => {
    const totalIncome = transactions
        .filter(transaction => transaction.amount > 0)
        .reduce((acc, transaction) => acc + transaction.amount, 0);

    const totalExpenses = transactions
        .filter(transaction => transaction.amount < 0)
        .reduce((acc, transaction) => acc + transaction.amount, 0);

    const netIncome = totalIncome + totalExpenses; // Net income calculation

    // Debugging logs
    console.log("Total Income:", totalIncome);
    console.log("Total Expenses:", totalExpenses);
    console.log("Net Income:", netIncome);

    return (
        <div className="analytics">
            <h2>Analytics</h2>
            <div className="analytics-summary">
                <div className="total-income">
                    <h3>Total Income:</h3>
                    <p style={{ color: 'green' }}>${totalIncome.toFixed(2)}</p>
                </div>
                <div className="total-expenses">
                    <h3>Total Expenses:</h3>
                    <p style={{ color: 'red' }}>${Math.abs(totalExpenses).toFixed(2)}</p>
                </div>
                <div className="net-income">
                    <h3>Net Income:</h3>
                    <p style={{ color: netIncome >= 0 ? 'green' : 'red' }}>${netIncome.toFixed(2)}</p>
                </div>
            </div>
        </div>
    );
};

export default Analytics;
