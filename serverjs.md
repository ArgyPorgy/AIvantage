Explanation of the `server.js` file:

- We use Express to create the server.
- The `Blockchain` class is imported from the `blockchain.js` file.
- The `transactions` array is imported from the `data.js` file to simulate user transactions.
- We set up three endpoints:
  1. `/blocks`: To get the entire blockchain.
  2. `/addTransaction`: To add a new transaction to the blockchain as a new block.
  3. `/isBlockchainValid`: To check if the blockchain is valid.
- When a new transaction is added to the blockchain (`/addTransaction` endpoint), a new block is created and added to the blockchain using the `addBlock` method.
- The server listens on port 3000, and you can access the blockchain through the provided endpoints.

Please note that this implementation is a simple demonstration and doesn't include features like consensus algorithms, decentralized network, and mining rewards. In a real-world scenario, those features would be necessary for a functional blockchain system.
