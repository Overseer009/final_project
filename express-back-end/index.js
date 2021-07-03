require("./lib/db")
const express = require("express");
const app = express();
const request = require("request")
const bodyParser = require("body-parser");

const PORT = 3002;

const { 
  getUser,
  createUser, 
  getTimelinesForUser, 
  getInstancesForTimelines, 
  getColoursForInstances  
} = require("./lib/dbHelpers")

//Express Configuration
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static("public"));


//Routes
// USERS
app.get('/api/users', (req, res)=> {
  getUser("darius.homenick@tod.ca")
  .then((response)=> {
    res.status(200).json(response);
  })
})

app.post('/api/users', (req, res) => {
  console.log("Line 33 ------- ", req.body);
  createUser(req.body);
  res.status(200).send("User Created")
})

// TIMELINES
app.get('/api/timelines', (req, res) => {
  getTimelinesForUser(1)
  .then((response) => {
    res.status(200).json(response);
  })
})

app.post('/api/timelines', (req, res) => {
  createTimeline(1, "My timeline", 1, 12)
  res.status(200).send("Timeline Created")
})

app.get('/api/instances', (req, res) => {
  getInstancesForTimelines(2)
    .then((response) => {
      res.status(200).json(response);
    })
})

app.get('/api/instance_colours', (req, res) => {
  getColoursForInstances(2)
    .then((response) => {
      res.status(200).json(response);
    })
})


 app.listen (PORT, () => {
  console.log('Server if running, better catch it.');
})