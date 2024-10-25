// src/components/CurrencyConverter/CurrencyConverter.js

import React, { useState } from 'react';
import './CurrencyConverter.css';

const CurrencyConverter = () => {
    const [amount, setAmount] = useState('');
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('EUR');
    const [conversionResult, setConversionResult] = useState(null);

    // Dummy conversion rates
    const conversionRates = {
        USD: { EUR: 0.85, INR: 74.00 },
        EUR: { USD: 1.18, INR: 87.00 },
        INR: { USD: 0.013, EUR: 0.011 }
    };

    const handleConvert = (e) => {
        e.preventDefault();
        if (!amount || isNaN(amount)) return;

        const result = amount * (conversionRates[fromCurrency][toCurrency] || 1);
        setConversionResult(result.toFixed(2));
    };

    return (
        <div className="currency-converter">
            <h3>Currency Converter</h3>
            <form onSubmit={handleConvert} className="converter-form">
                <div className="form-group">
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Amount"
                        required
                    />
                </div>
                <div className="form-group">
                    <select
                        value={fromCurrency}
                        onChange={(e) => setFromCurrency(e.target.value)}
                    >
                        {Object.keys(conversionRates).map((currency) => (
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        ))}
                    </select>
                    <span> to </span>
                    <select
                        value={toCurrency}
                        onChange={(e) => setToCurrency(e.target.value)}
                    >
                        {Object.keys(conversionRates).map((currency) => (
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        ))}
                    </select>
                </div>
                <button type="submit" className="convert-button">Convert</button>
            </form>
            {conversionResult && (
                <p className="conversion-result">
                    Result: {conversionResult} {toCurrency}
                </p>
            )}
        </div>
    );
};

export default CurrencyConverter;
