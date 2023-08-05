const express = require("express");
const cors = require("cors");

//Creating first server which will host the API
const app = express();
const port = 3000;
const calculatorRoute = require("./routes/calculatorRoute.js");

app.use(express.static(__dirname+"/public"))
app.use(cors());
app.use("/api/calc", calculatorRoute);
app.get("/", (req, res) => {
  res.send("Hello! Welcome to the first server");
});

app.listen(port, () => {
  console.log(`Example app1 (API)
listening at
http://localhost:${port}`);
});

//Creating 2nd server which will host a webpage (client)
const app2 = express();
const port2 = 8080;

app2.use(cors());
app2.use(express.static(__dirname+"/public"));

app2.use("/api/calc", calculatorRoute);

app2.get("/", (req, res) => {
  res.send("Hello! Welcome to the second server");
});

app2.listen(port2, () => {
  console.log(`Example app2 (CLIENT)
listening at
http://localhost:${port2}`);
});