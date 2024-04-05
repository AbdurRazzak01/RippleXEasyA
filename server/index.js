const express = require('express');
const xrpl = require('xrpl');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5001;

const client = new xrpl.Client('wss://s.altnet.rippletest.net:51233');

// Apply CORS middleware
app.use(cors({
  origin: 'http://localhost:3000'
}));

app.use(express.json());


// Generate a new XRPL wallet and fund it
app.get('/account', async (req, res) => {
  try {
    // Connect the XRPL client
    await client.connect();

    // Generate a new XRPL wallet
    const wallet = xrpl.Wallet.generate();

    // Fund the wallet using the connected client
    const fundResult = await client.fundWallet(wallet);

    // Send the wallet and fund result as response
    res.json({ wallet, fundResult });
  } catch (error) {
    console.error('Error generating and funding wallet:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Send XRP from one account to another
app.post('/send-xrp', async (req, res) => {
  try {
    const { sourceAddress, destinationAddress, amount } = req.body;

    // Construct the transaction
    const txJson = {
      TransactionType: 'Payment',
      Account: sourceAddress,
      Destination: destinationAddress,
      Amount: amount,
    };

    // Sign and submit the transaction
    const result = await client.submit(txJson);
    res.json({ result });
  } catch (error) {
    console.error('Error sending XRP:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Calculate coins based on input amount
// Calculate coins based on input amount with validation
app.post('/calculate-coins', (req, res) => {
  try {
    const { amount } = req.body;

    // Validate amount
    if (isNaN(amount)) {
      throw new Error('Invalid input: amount must be a number');
    }

    // Custom validation logic - Check if the amount is even
    if (!isValidAmount(amount)) {
      throw new Error('Invalid input: amount is not even');
    }

    // Calculate coins based on the input amount only if it's valid
    const coins = calculateCoins(amount);

    res.json({ coins });
  } catch (error) {
    console.error('Error calculating coins:', error.message);
    res.status(400).json({ error: error.message });
  }
});

// Function to check if the amount is even
function isValidAmount(amount) {
  return amount % 2 === 0;
}

// Function to calculate coins
function calculateCoins(amount) {
  return amount / 50; // Example calculation
}


// Mock user database (replace this with your actual user database)
const users = [
  { email: 'user1@example.com', password: 'password1', name: 'User 1' },
  { email: 'user2@example.com', password: 'password2', name: 'User 2' }
];

// Endpoint for user login
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  // Find the user in the mock database
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    // Login successful
    res.status(200).json({ message: 'Login successful', user });
  } else {
    // Login failed
    res.status(401).json({ message: 'Invalid email or password' });
  }
});
/////////////////////////////////////////////////
/*// Endpoint for calculating and receiving money automatically

app.post('/calculate-and-receive', async (req, res) => {
  try {
    const { amount } = req.body;

    // Validate amount
    if (isNaN(amount)) {
      throw new Error('Invalid input: amount must be a number');
    }

    // Custom validation logic - Check if the amount is even
    if (!isValidAmount(amount)) {
      throw new Error('Invalid input: amount is not even');
    }

    // Calculate coins based on the input amount
    const coins = calculateCoins(amount);

    // Connect to XRPL client
   // await client.connect();

    // Replace 'receiverAddress' with the address of your receiving wallet
   // const receiverAddress = 'rXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
    
    // Construct the transaction to receive XRP
   // const txJson = {
    //  TransactionType: 'Payment',
     // Account: receiverAddress,
     // Amount: amount,
   // };

    // Submit the transaction
    //const result = await client.submit(txJson);
    
    // Send response with validated amount and transaction result
    res.json({ coins, result });
  } catch (error) {
    console.error('Error calculating and receiving money:', error.message);
   // res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Function to check if the amount is even
function isValidAmount(amount) {
  return amount % 2 === 0;
}

// Function to calculate coins based on the input amount
function calculateCoins(amount) {
  return amount / 50; // Calculation: amount divided by 50
}*/

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



