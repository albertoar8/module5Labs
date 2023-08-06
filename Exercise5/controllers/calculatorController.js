"use strict";


let calculatorModel = require("../models/index");
let mycalc= new calculatorModel();

const getUsers = (res) => {

    mycalc.Users.find({}, {}, {}, (err,data) => {
        if (err) throw err;
        res.send({result: 200 , data: data})
    });
}

const createUsers = (data, res) => {
    new Models.Users(data).save((err,data) => {
        if(err) throw err
        res.send({ result: 200 , data: data})
    });
}

module.exports = {
    getUsers, createUsers
}