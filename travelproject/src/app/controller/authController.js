const {registerUser,loginUser} = require('../config/dbConfig.js');


exports.registerUser = function(req, res){
     registerUser(req,res);
};

exports.login = function(req, res){
    loginUser(req, res);
};

