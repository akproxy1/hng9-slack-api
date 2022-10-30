exports.example = (req, res) => {
    console.log("example")
    const slack = 
  {
    slackUsername: "proxiiman",
    backend: true,
    age: 34,
    bio: "I am Akeem, a web developer",
  };
    res.send(slack)
}


