const Calculator = require("./calculatorModel");

async function init(){
    await Calculator.sync();
}
init();

module.exports={
    Calculator
};