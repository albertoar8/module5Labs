// This is Where we require express Router 
var express=require("express");
var route = express.Router();
const calculatorController = require('../controllers/calculatorController.js')

router.get('/add', (req, res) => {
    calculatorController.addNumbers(req,res);
});

route.get('/',(req,res)=>{ //In case we have not included more info to the server
    res.send('Check the URL. The correct endpoint for an addition is : "/api/calc/add?num1=4&num2=8" ');
})

route.get('/add',(req,res)=>{
    let num1=Number(req.query.num1); // Another way of converting from string to number is: parseInt();
    let num2=Number(req.query.num2); // There are the require (req) sent thorugh the URL 
    let result=num1+num2;  // Now is an addition but it could be something else (a service, like a videocall)
    console.log(`You have requested the server this operation: ${num1} + ${num2} = `,result) ;
    let message= new String(`You have requested the server this operation: ${num1} + ${num2} = `+ result);
    let jsonMessage= {
        num1:num1,
        operation:"add",
        num2:num2,
        result:result,
        message:message
    };
    res.send(jsonMessage); //Here we can send message or jsonMessage (with maybe more info)
    // For the purpose of this exercise we pass through res.send() and we send an object so it simply
    // looks better in the browser or postman when we test our api request 
})

module.exports = route;
