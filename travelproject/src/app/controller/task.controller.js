const con =  require('../config/dbConfig');
const {getAllTasks} = require("../config/dbConfig");

exports.getAllTasks = function(req, res){
   getAllTasks(req,res);
}