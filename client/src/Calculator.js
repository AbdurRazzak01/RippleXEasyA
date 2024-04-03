import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Calculator = () => {
  const [amount, setAmount] = useState('');
  const [coins, setCoins] = useState(null);
  const [error, setError] = useState(null);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:5001/calculate-coins',
        { amount: parseInt(amount) }, // Request body as JSON
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
    }
  };
  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="amount">Enter amount:</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <button type="submit">Calculate Coins</button>
      </form>
      {error && <div>Error: {error}</div>}
      {coins !== null && <div>Coins: {coins}</div>}
    </div>
  );
};

export default Calculator;
