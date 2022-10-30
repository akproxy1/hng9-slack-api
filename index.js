const express = require("express");
const { json } = require("express");
//const flights = require("./controllers/flightController");
const models = require("./models/Slack");
const routes = require("./routes/slackRoute");

const app = express();

app.use(json());

app.use("/", routes);


const slack = 
  {
    slackUsername: "proxiiman",
    backend: true,
    age: 34,
    bio: "I am Akeem, a web developer",
  };

app.get("/slack", (req, res) => {
  res.send(slack);
});


const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
