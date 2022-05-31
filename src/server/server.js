// Setup empty JS object to act as endpoint for all routes
projectData = {};


// Require Express to run server and routes
var path = require('path')
const express = require('express');

// Start up an instance of app
const app = express();

// Initialize the main project folder
app.use(express.static('dist'))

console.log(__dirname)

// Setup Server
const port = 8080;

const server = app.listen(port, listening);


app.get('/', function (req, res) {
    res.sendFile('./dist/index.html')
    //*res.sendFile(path.resolve('dist/index.html'))
});

function listening() {
    console.log("server running");
    console.log(`running on localhost: ${port}`);
};




/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());





// GET
app.get('/all', function (req, res) {
    res.send(projectData);
});

// POST
app.post('/addWeatherData', (req, res)=> {
    projectData['date'] = req.body.date;
    projectData['temperature'] = req.body.temperature;
    projectData['userResponse'] = req.body.userResponse;
    console.log(req.body);
    console.log(projectData);
    res.send(projectData);
}); 

