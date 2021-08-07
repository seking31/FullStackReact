const express = require("express");
const axios = require('axios');

const PORT = 3001;

const app = express();

app.get('/api', (req, res) => {
        axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=c1a20b6b247f4f3fba1939894b159d7b')    
        .then(data => res.json(data.data.articles))
        .catch(err => res.send(err));
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});