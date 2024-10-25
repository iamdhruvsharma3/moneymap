import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import TransactionForm from './components/TransactionForm/TransactionForm';
import TransactionList from './components/TransactionList/TransactionList';
import Analytics from './components/Analytics/Analytics';
import DateFilter from './components/DateFilter/DateFilter'; 
import CategoryFilter from './components/CategoryFilter/CategoryFilter'; 
import CurrencyConverter from './components/CurrencyConverter/CurrencyConverter'; 
import Settings from './pages/Settings/Settings'; // Import Settings
import './index.css';

function App() {
    const [transactions, setTransactions] = useState([]);
    const [filteredTransactions, setFilteredTransactions] = useState(transactions);
    const [currency, setCurrency] = useState('USD'); // Default currency preference

    const addTransaction = (transaction) => {
        setTransactions((prevTransactions) => [...prevTransactions, transaction]);
        setFilteredTransactions((prev) => [...prev, transaction]);
    };

    const filterTransactions = (startDate, endDate) => {
        const filtered = transactions.filter(transaction => {
            const transactionDate = new Date(transaction.date);
            return transactionDate >= new Date(startDate) && transactionDate <= new Date(endDate);
        });
        setFilteredTransactions(filtered);
    };

    const filterByCategory = (category) => {
        if (!category) {
            setFilteredTransactions(transactions);
            return;
        }
        const filtered = transactions.filter(transaction => transaction.type === category);
        setFilteredTransactions(filtered);
    };

    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route 
                        path="/" 
                        element={<TransactionForm addTransaction={addTransaction} />} 
                    />
                    <Route 
                        path="/transactions" 
                        element={
                            <>
                                <DateFilter filterTransactions={filterTransactions} />
                                <CategoryFilter filterByCategory={filterByCategory} />
                                <TransactionList transactions={filteredTransactions} currency={currency} />
                            </>
                        } 
                    />
                    <Route path="/analytics" element={<Analytics transactions={filteredTransactions} currency={currency} />} />
                    <Route path="/currency-converter" element={<CurrencyConverter />} />
                    <Route path="/settings" element={<Settings setCurrency={setCurrency} />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
