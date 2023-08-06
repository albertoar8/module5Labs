# Excersice 5

Thie is Exercise 5 from slide 43 of Module 5.Backend-Development. 

### Task: 
Expand on the previous exercises and update your application to use controllers instead.

#### Sub-tasks:

 - Create a controller Folder and create a calculatorController.js file which will be ***required into calculatorRoute.js*** to call functions of the controller object/module.
 ```
 const calculatorController = require('../controllers/calculatorController.js')

router.get('/add', (req, res) => {
    calculatorController.addNumbers(req,res);
});
 ```
### Notes:
* Make sure to install express, nodemon and cors
* Run npm start which must "nodemon server.js"
