import React, { useState } from 'react';
import axios from 'axios';
import './Calculator.css'; // Import CSS file for styling

const Calculator = () => {
  const [amount1, setAmount1] = useState('');
  const [amount2, setAmount2] = useState('');
  const [coins, setCoins] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:5001/calculate-coins',
        { amount: parseInt(amount1) + parseInt(amount2) }, // Sum of two amounts
        {
          headers: {
            'Content-Type': 'application/json' // Explicitly set content type to JSON
          }
        }
      );
      setCoins(response.data.coins);
      setError(null);
    } catch (error) {
      console.error('Error calculating coins:', error.message);
      setError('Error calculating coins. Please try again later.');
      setCoins(null); // Reset coins value in case of error
    }
  };

  return (
    <div className="calculator-container">
      <form onSubmit={handleSubmit} className="calculator-form">
        <div className="form-group">
          <label htmlFor="amount1">Amount 1:</label>
          <input
            type="number"
            id="amount1"
            value={amount1}
            onChange={(e) => setAmount1(e.target.value)}
            required
          />
          <label htmlFor="amount2">Amount 2:</label>
          <input
            type="number"
            id="amount2"
            value={amount2}
            onChange={(e) => setAmount2(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="calculate-button">Calculate Coins</button>
      </form>
      {error && <div className="error-message">Error: {error}</div>}
      {!error && coins !== null && 
        <div className="result">
          <span>Result:</span>
          <span>{coins}</span>
        </div>
      }
    </div>
  );
};

export default Calculator;
