import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import SignMessage from './SignMessage';
const MetaInfo = () => {
  const [accountInfo, setAccountInfo] = useState(null);
  const [transactionStatus, setTransactionStatus] = useState('');

  useEffect(() => {
    const fetchAccountInfo = async () => {
      try {
        // Check if MetaMask is installed
        if (window.ethereum) {
          const web3 = new Web3(window.ethereum);

          // Request access to the user's MetaMask accounts
          const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

          // Get the account number
          const accountNumber = accounts[0];

          // Get the balance of the user's account
          const balance = await web3.eth.getBalance(accountNumber);

          // Convert the balance from Wei to Ether
          const balanceInEther = web3.utils.fromWei(balance, 'ether');

          // Get the live ledger information
          const blockNumber = await web3.eth.getBlockNumber();
          const latestBlock = await web3.eth.getBlock(blockNumber);

          // Convert BigInt values to strings or numbers
          const latestBlockStringified = {
            number: latestBlock.number.toString(),
            timestamp: latestBlock.timestamp.toString(),
            // Add other properties as needed
          };

          // Prepare account information object
          const accountInfo = {
            accountNumber,
            balanceInEther: balanceInEther.toString(), // Convert BigInt to string
            latestBlock: latestBlockStringified,
          };

          setAccountInfo(accountInfo);

        } else {
          console.error('MetaMask not found. Please install MetaMask to use this feature.');
        }
      } catch (error) {
        console.error('Error fetching account information:', error);
      }
    };

    fetchAccountInfo();
  }, []);

  const handleTransaction = async () => {
    try {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const senderAddress = accounts[0];
        const receiverAddress = '0x1234567890123456789012345678901234567890'; // Replace with the recipient's address
        const amountToSend = web3.utils.toWei('1', 'ether'); // Amount to send in Wei

        const tx = await web3.eth.sendTransaction({
          from: senderAddress,
          to: receiverAddress,
          value: amountToSend,
        });

        setTransactionStatus(`Transaction successful. Transaction hash: ${tx.transactionHash}`);
      } else {
        console.error('MetaMask not found. Please install MetaMask to use this feature.');
      }
    } catch (error) {
      console.error('Error sending transaction:', error);
      setTransactionStatus(`Error sending transaction: ${error.message}`);
    }
  };

  return (
    <div>
            <div><SignMessage/></div>

      <h2>Account Information</h2>
      {accountInfo ? (
        <div>
          <p>Account Number: {accountInfo.accountNumber}</p>
          <p>Balance: {accountInfo.balanceInEther} Ether</p>
          <p>Latest Block: {JSON.stringify(accountInfo.latestBlock)}</p>
          <button onClick={handleTransaction}>Send Transaction</button>
          {transactionStatus && <p>{transactionStatus}</p>}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MetaInfo;
