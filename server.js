// server.js

const express = require('express');
const bodyParser = require('body-parser');
const Blockchain = require('./blockchain');
const transactions = require('./data');

const app = express();
const port = 3000;

const myBlockchain = new Blockchain();

app.use(bodyParser.json());

// Endpoint to get the entire blockchain
app.get('/blocks', (req, res) => {
  res.json(myBlockchain.chain);
});

// Endpoint to add a new block (transaction) to the blockchain
app.post('/addTransaction', (req, res) => {
  const { from, to, amount } = req.body;
  const newBlock = new Block(myBlockchain.chain.length, new Date().toString(), { from, to, amount });
  myBlockchain.addBlock(newBlock);
  res.json(newBlock);
});

// Endpoint to check if the blockchain is valid
app.get('/isBlockchainValid', (req, res) => {
  const isValid = myBlockchain.isChainValid();
  res.json({ isValid });
});

app.listen(port, () => {
  console.log(`Blockchain server is running on http://localhost:${port}`);
});
