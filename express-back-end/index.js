require("./lib/db");
const express = require("express");
const app = express();
const request = require("request");
const bodyParser = require("body-parser");

const PORT = 3002;

const {
  getUserByEmail,
  createUser,
  getTimelinesForUser,
  getInstancesForTimelines,
  getColoursForInstances,
  validateUser,
  getInstanceByName,
  createInstance,
  createTimeline,
  getTimelineByNameForUser,
} = require("./lib/dbHelpers");

//Express Configuration
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

//Routes
// USERS
app.get("/api/users", (req, res) => {
  getUserByEmail("darius.homenick@tod.ca").then((response) => {
    res.status(200).json(response);
  });
});

app.post("/api/users", (req, res) => {
  console.log("Line 32 ------- ", req.body);
  validateUser(req.body.email, req.body.password).then((data) => {
    if (!data) {
      res.status(401).send("Invalid User");
    } else res.status(200).json(data);
  });
});

app.post("/api/users/new", (req, res) => {
  getUserByEmail(req.body.email).then((userInfo) => {
    if (!userInfo) {
      createUser(req.body)
        .then((newUser) => {
          res.status(200).json(newUser);
        })
        .catch((err) => err.message);
    }
  });
});

// TIMELINES
app.get("/api/timelines", (req, res) => {
  getTimelinesForUser(1).then((response) => {
    res.status(200).json(response);
  });
});

// CREATES A NEW TIMELINE IN THE DB FOR A SPECIFIC USER (NO SAME NAMES)
app.post("/api/timelines", (req, res) => {
  console.log("req body?", req.body);
  getTimelineByNameForUser(req.body.name, req.body.user_id).then(
    (userTimelines) => {
      console.log("userTimelines:", userTimelines);
      if (!userTimelines) {
        createTimeline(req.body).then((newTimeline) => {
          res.status(200).json(newTimeline);
        });
      } else {
        console.log("Sorry already exists!!!!!");
        res.status(401).send("----- Invalid Timeline name -----");
      }
    }
  );
});

app.get("/api/instances", (req, res) => {
  getInstancesForTimelines(2).then((response) => {
    res.status(200).json(response);
  });
});

app.post("/api/instances/new", (req, res) => {
  createInstance(req.body)
    .then((newInstance) => {
      res.status(200).json(newInstance);
    })
    .catch((err) => err.message);
});

app.get("/api/instance_colours", (req, res) => {
  getColoursForInstances(2).then((response) => {
    res.status(200).json(response);
  });
});

app.listen(PORT, () => {
  console.log("Server if running, better catch it.");
});
