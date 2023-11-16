// app.js

const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Set up middleware to serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a route for the landing page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/user', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'user.html'));
  });

app.get('/wallet', (req, res) => {
res.sendFile(path.join(__dirname, 'public', 'wallet.html'));
});

app.get('/apple-app-site-association', (req, res) => {
  res.setHeader("Content-Type", "application/json")
  res.sendFile(path.join(__dirname, '', 'wallet.html'));
  
  });

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});