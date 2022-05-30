// Setup empty JS object to act as endpoint for all routes
projectData = {};


// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

// Initialize the main project folder
app.use(express.static('dist'))

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile('dist/index.html');w
})

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

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

