const express = require("express");

const cors = require("cors");

const app = express();

const port = 3000;

const calculatorRoute = require("./routes/index.js");

app.use(cors());

app.use("/calculator", calculatorRoute);

app.get("/", (req, res) => {
  res.send("Hello! Welcome to the first server");
});

app.listen(port, () => {
  console.log(`Example app
listening at
http://localhost:${port}`);
});