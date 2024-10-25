import React, { useState } from 'react';

const Settings = () => {
    const [currency, setCurrency] = useState('USD'); // Default currency

    const handleCurrencyChange = (e) => {
        setCurrency(e.target.value);
        // You can also save this preference to local storage or context if needed
    };

    return (
        <div className="settings-container">
            <h2>Settings</h2>
            <div className="setting">
                <label htmlFor="currency">Currency Preference:</label>
                <select
                    id="currency"
                    value={currency}
                    onChange={handleCurrencyChange}
                >
                    <option value="USD">USD ($)</option>
                    <option value="EUR">EUR (€)</option>
                    <option value="GBP">GBP (£)</option>
                    <option value="INR">INR (₹)</option>
                    {/* Add more currencies as needed */}
                </select>
            </div>
            {/* Add more settings options here as needed */}
        </div>
    );
};

export default Settings;
