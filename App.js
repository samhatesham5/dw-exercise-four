const express = require('express');
//Runs express
const app = express();
//Port used to run our server
const port = 3000;

//Sending a request the rootURL (which is '/') from local port 3000
app.get('/', (request,response) => {
    response.send("Hello World!")
});

//Listen(takes two arguments)
//Listens for the response and if it works, console.log ("Wworking")
app.listen(port, () => console.log('Working!'));