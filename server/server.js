const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;
const Uri = 'http://localhost:3000';
// const Uri = 'https://jjwmixtape.herokuapp.com';

// webpack watch
app.use('/static', express.static(path.join(__dirname, '..', 'dist')));



// USED
app.get('/', userController.retrieveToken, (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
});


app.listen(PORT);
