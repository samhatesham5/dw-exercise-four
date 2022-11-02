//Creating an about page

const express = require('express');
const router = express.Router(); 

//Testing to make sure we can route
router.use((request, response, next) => {
    console.log('Time: ', Date.now());
    next();
  });

  // define the home page route using ('/') URL
  router.get('/about', (request,response) => {
    response.send("About Me");
  }); 

  //So if you go to /about/me you'll get this displayed in browser
  router.get('/me', (request, response) => {
    response.send([
        {
            id: "me",
            name: "Sam",
            message: "Hello",
        }
    ])
  });



  //Exporting router
  module.exports = router; 