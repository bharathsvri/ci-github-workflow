const express = require('express');

const app = express();

app.use(express.json());

// Single API Endpoint
app.get('/api/hello', (req, res) => {
  res.status(200).json({
    message: 'Hello, World! API is up and running.',
    status: 'success',
    timestamp: new Date().toISOString()
  });
});

module.exports = app;
