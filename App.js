const express = require('express');
//Runs express (web server software)
const app = express();
//Port used to run our server
const port = 3000;

//Creating a router
const homePage = require('./routes/index.js');
const aboutPage = require('./routes/about.js');

app.use("/", homePage); 
app.use('/about', aboutPage);
aboutPage.use('/me', aboutPage);

//using express.static('public') function
//We're saying whenever people travel to that url, run that function
app.use('/images', express.static('public'));

//Listen(path, callback function)
//Listens for the response and if it works, console.log ("Wworking")
app.listen(port, () => console.log('Working!'));