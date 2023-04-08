const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const jwtConfig = require('../config/jwt-config');
const authQueries = require('../queries/authQueries');
const userQueries = require('../queries/userQueries');
const {userController} = require("./userController");
const {registerUser} = require('../config/dbConfig.js');
const {loginUser} = require('../config/dbConfig.js');


exports.registerUser = function(req, res){
     registerUser(req,res, [req.body.first_name, req.body.last_name, req.body.email, req.body.age, req.body.password]);
};

exports.login = function(req, res){
    loginUser(req, res);
};