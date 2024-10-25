// src/components/TransactionForm/TransactionForm.js

import React, { useState } from 'react';
import './TransactionForm.css';

const TransactionForm = ({ addTransaction }) => {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [transactionType, setTransactionType] = useState('income');
    const [date, setDate] = useState(''); // New state for date

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!description || !amount || !date) return; // Ensure date is also checked

        // Create the transaction object based on the selected transaction type
        const transaction = {
            description,
            amount: transactionType === 'expense' ? -parseFloat(amount) : parseFloat(amount),
            type: transactionType,
            date, // Include date in the transaction object
        };

        addTransaction(transaction);
        setDescription('');
        setAmount('');
        setTransactionType('income'); // Reset to income by default
        setDate(''); // Reset date to empty
    };

    return (
        <div className="transaction-form-container">
            <h2>Add Transaction</h2>
            <form onSubmit={handleSubmit} className="transaction-form">
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input
                        type="text"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Enter description"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="amount">Amount:</label>
                    <input
                        type="number"
                        id="amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Enter amount"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="transactionType">Transaction Type:</label>
                    <select
                        id="transactionType"
                        value={transactionType}
                        onChange={(e) => setTransactionType(e.target.value)}
                    >
                        <option value="income">Income</option>
                        <option value="expense">Expense</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="date">Date:</label>
                    <input
                        type="date"
                        id="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="submit-button">Add Transaction</button>
            </form>
        </div>
    );
};

export default TransactionForm;
