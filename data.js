// data.js

const transactions = [
  {
    from: 'UserA',
    to: 'UserB',
    amount: 10,
    device: {
      no: 'Device001',
    },
    time: new Date().toISOString(),
    verification: 'Pending',
    idoftransaction: '12345abc',
    connection: 'WiFi',
  },
  {
    from: 'UserB',
    to: 'UserC',
    amount: 5,
    device: {
      no: 'Device002',
    },
    time: new Date().toISOString(),
    verification: 'Confirmed',
    idoftransaction: '98765xyz',
    connection: '4G',
  },
  // Add more transactions as needed
];

module.exports = transactions;
