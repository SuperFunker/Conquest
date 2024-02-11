const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Middleware to parse JSON bodies
app.use(express.static('dist'));

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/dist/index.html');
});

// Basic route for GET request
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
