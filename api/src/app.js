const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

console.log(process.env.APP_PORT);
app.listen(process.env.APP_PORT);
