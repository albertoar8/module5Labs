const express = require("express");
const cors = require("cors");
/*-----------------------------------------------------------------*/
//Creating first server which will host the API
const app = express(); //create an instance of express Web Server
const port = 3000;  //local port (http://localhost:3000)
const calculatorRoute = require("./routes/calculatorRoute.js"); //use calculator route

app.use(cors());
app.use("/api/calc", calculatorRoute);
app.get("/", (req, res) => {
  res.send("Hello! Welcome to the first server app1 (API)");
});

app.listen(port, () => {
  console.log(`Example app1 (API) listening at http://localhost:${port}`);
});
// API calls will be sent through the browser. ex ("http://localhost:3000/api/calc/add?num1=16&num2=10")
// without running the other server app2 below (Front-End/Client) that is hosting the webpage with a better UI 
/*--------------------------------------------------------------------*/
//Creating 2nd server which will host a webpage (client)
// const app2 = express();
// const port2 = 8080;

// app2.use(cors());
// app2.use(express.static(__dirname+"/public"));

// app2.use("/api/calc", calculatorRoute);

// app2.get("/", (req, res) => {
//   res.send("Hello! Welcome to the second server");
// });

// app2.listen(port2, () => {
//   console.log(`Example app2 (CLIENT)
// listening at
// http://localhost:${port2}`);
// });