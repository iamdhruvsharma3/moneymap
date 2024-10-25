import React from 'react';
import TransactionItem from '../TransactionItem/TransactionItem'; 
import './TransactionList.css'; 

const TransactionList = ({ transactions, currency }) => {
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(amount);
    };

    return (
        <div className="transaction-list">
            <h2>Transaction List</h2>
            {transactions.length > 0 ? (
                transactions.map((transaction, index) => (
                    <TransactionItem key={index} transaction={{ ...transaction, amount: formatCurrency(transaction.amount) }} />
                ))
            ) : (
                <p>No transactions available.</p>
            )}
        </div>
    );
};

export default TransactionList;
