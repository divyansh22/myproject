const Users = require('../db').Users
const route = require('express').Router();

route.post('/', function(req, res){
    console.log("hello")
    //yo likha nai aa rha mtlb ki post request yahan tk nai aa rhi
    // Add the new user in database
    Users.create({
        firstname: req.body.firstname,
        lastname:req.body.lastname,
        username: req.body.username,
        password: req.body.password
        
    }).then((user) => {
        res.status(201).send(user)
    }).catch((error) => {
        res.status(501).send({
            error: "Error adding user"
        })
    })
})

exports = module.exports = route