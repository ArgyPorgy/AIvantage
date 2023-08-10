In this updated `data.js` file, each transaction object now includes the following fields:

- `from`: The sender of the transaction (e.g., "UserA").
- `to`: The recipient of the transaction (e.g., "UserB").
- `amount`: The amount of the transaction (e.g., 10).
- `device`: An object representing the device used for the transaction, with the `no` field specifying the device number (e.g., "Device001").
- `time`: The timestamp of the transaction (e.g., "2023-07-30T12:34:56.789Z").
- `verification`: The status of the transaction verification (e.g., "Pending" or "Confirmed").
- `idoftransaction`: The unique identifier for the transaction (e.g., "12345abc").
- `connection`: The type of network connection used for the transaction (e.g., "WiFi" or "4G").

These fields can be used to store additional information about each transaction in the blockchain system.
