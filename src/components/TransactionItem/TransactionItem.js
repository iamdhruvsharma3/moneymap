import React from 'react';
import './TransactionItem.css';

const TransactionItem = ({ transaction }) => {
    return (
        <div className={`transaction-item ${transaction.type}`}>
            <span>{transaction.description}</span>
            <span>{transaction.amount}</span>
            {/* You might want to add a date or other details here */}
        </div>
    );
};

export default TransactionItem;
