const express = require('express');
const pool = require('../modules/pool');
const axios = require('axios');
require('dotenv').config();

const router = express.Router();



router.get('/:query', (req, res) => {
    const query = req.params.query;
    console.log('from server.router query:', query);

    axios.get(`http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${query}&limit=10`)
        .then( response => {
            console.log(response.data)
            res.send(response.data)
        })
        .catch ( error => {
            console.log('error in API GET:', error);
        })
})



module.exports = router;