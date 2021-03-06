const { default: axios } = require('axios');
const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  console.log('GET /api/favorite');
  pool.query(`SELECT * FROM "favorites"`)
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('Error in GET /api/favorite', err)
      res.sendStatus(500)
    })
});

// add a new favorite
router.post('/', (req, res) => {
  const newFavoriteUrl = req.body.url;
  const queryText = `
  INSERT INTO "favorites" ("url")
  VALUES ($1);
  `

  const values = [newFavoriteUrl];

  pool.query(queryText, values)
  .then(() => {
    res.sendStatus(201);
  }).catch(error => {
    console.log(error);
  })
  console.log('post', req.body.url);
});


// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete('/:id', (req, res) => {
  
  const queryText = 'DELETE FROM "favorites" WHERE id=$1';
  pool.query(queryText, [req.params.id])
    .then(() => {res.sendStatus(200)})
    .catch((err) => {
    console.log('delete query err', err);
    res.sendStatus(500);
    })
});

module.exports = router;
