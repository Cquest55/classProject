/**
 * this will end up being userDTO and the db config will be moved
 */

const mysql = require('mysql');
const {userQueries} = require("../queries/userQueries");
const connection = mysql.createConnection({
    host: process.env.DB_HOST || "172.17.0.1",
    user: process.env.DB_USER || "user",
    port: process.env.PORT || "3307",
    password: process.env.DB_PWD || "root",
    database: process.env.DB_DATABASE || "flightsearchsystem",
});
connection.connect(function(err) {
    if (err) {
        console.error('[MYSQL] Error on Connection: ' + err.stack);
        return;
    }

    queryOnStartUp(userQueries.CREATE_USER_TABLE, err);
    console.log('[MYSQL] Connected with ID ' + connection.threadId + '!');
});

function queryOnStartUp(sql, err) {
    return new Promise(resolve => {
        connection.query(sql, function (err, result){
            if(err){
                result.send(err);
            }
            console.log("table created or exists.")
        });
    });
}

function queryGetUsers(sql, res) {
    return new Promise(resolve => {
        connection.query(sql, function (err, result){
            if(err){
                res.send(err);
            }
            res.json(result);
        });
    });
}

function queryGetUser(sql, res, [params]) {
    console.log(params);
    return new Promise(resolve => {
        connection.query(sql, params, function (err, result){
            if(err){
                res.send(err);
            }
            res.json(result);
        });
    });
}

function queryCreateUser(sql, res) {
    console.log(sql);
    return new Promise(resolve => {
        connection.query(sql, function (err, result) {
            if (err) {
                res.send(err);
            }
            console.log(res);
            res.json({message: "Insert Rows: " + result.rowsAffected});
        });
    });
}
function queryUpdateUser(sql, res) {
    console.log(sql);
    return new Promise(resolve => {
        connection.query(sql, function (err, result){
            if(err){
                res.send(err);
            }
            console.log(res);
            res.json({message: "Insert Rows: " + result.rowsAffected});
        });
    });
}

function queryDeleteUser(sql, res) {
    console.log(sql);
    return new Promise(resolve => {
        connection.query(sql, function (err, result){
            if(err){
                res.send(err);
            }
            console.log(res);
            res.json(result);
        });
    });
}

module.exports = queryGetUsers, queryGetUser,queryCreateUser,queryUpdateUser,queryDeleteUser;
