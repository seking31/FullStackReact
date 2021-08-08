const express = require("express");
const axios = require('axios');
require('dotenv').config()

var articlesRouter = express.Router();

const apiKey = process.env.API_KEY;

articlesRouter.get('/', function(req, res) {
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)    
    .then(data => res.json(data.data.articles))
    .catch(err => res.send(err));
});

module.exports = articlesRouter;