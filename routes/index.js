const express = require('express');

const router = express.Router(); 

//Testing to make sure we can route
router.use((request, response, next) => {
    console.log('Time: ', Date.now());
    next();
  });

  // define the home page route using ('/') URL
  router.get('/', (request, response) => {
    response.send('Homepage');
  });

  //Exporting router
  module.exports = router; 