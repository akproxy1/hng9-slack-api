const express = require("express");
const { json } = require("express");
//const flights = require("./controllers/flightController");
const models = require("./models/Slack");
const routes = require("./routes/slackRoute");
const { check, validationResult} = require("express-validator");

const app = express();

//app.use(json());
app.use(express.json());

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

const allowed_operations = ["addition","subtraction","multiplication","division"]

app.post("/operation",[
    check("operation_type").toLowerCase().isIn(allowed_operations).withMessage(`Expected operation: [${ allowed_operations }]`),
    check("x").isNumeric().withMessage("Must be an integer"),
    check("y").isNumeric().withMessage("Must be an integer")
], (req,res) => {
    const input_error = validationResult(req)
    if (!input_error.isEmpty()) {
        return res.status(422).json({ "Error": input_error.array() })
    }
    let {operation_type, x, y } = req.body
    let result
    switch (operation_type) {
        case "addition":
            result = x + y;
            break;
        case "subtraction":
            result = x - y;
            break;
        case "division":
            result = x / y;
            break;
        case "multiplication":
            result = x * y;
            break;
    }

    res.status(200).send({
        "slackUsername": "proxiiman",
        "result" : result,
        "operation_type" : operation_type
    })
})


const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
