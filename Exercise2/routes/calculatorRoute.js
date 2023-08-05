// This is Where we require express Router 
var express=require("express");
var route = express.Router();

route.get('/add',(req,res)=>{
    let num1=Number(req.query.num1); // Another way of converting from string to number is: parseInt();
    let num2=Number(req.query.num2);
    let result=num1+num2;
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