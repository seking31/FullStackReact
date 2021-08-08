const express = require("express");
const axios = require('axios');
require('dotenv').config()

var articlesRouter = express.Router();

const apiKey = process.env.API_KEY;

articlesRouter.post('/', function (req, res) {
    let searchQuery = req.body.searchQuery
    console.log(searchQuery, 3124134)
    axios.get(`https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${apiKey}`)
        .then(data => res.json(data.data.articles))
        .catch(err => console.log(err));
});

articlesRouter.get('/search', function (req, res) {
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)
        .then(data => res.json(data.data.articles))
        .catch(err => console.log(err));
});


module.exports = articlesRouter;