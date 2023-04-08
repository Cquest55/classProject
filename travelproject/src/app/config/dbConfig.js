/**
 * this will end up being userDTO and the db config will be moved
 */
const bcrypt = require('bcryptjs');
const mysql = require('mysql');
const {userQueries} = require("../queries/userQueries");
const {INSERT_USER} = require("../queries/authQueries");
const {userController} = require("../controller/userController");
const jwt = require("jsonwebtoken");
const jwtConfig = require("./jwt-config");

const connection = mysql.createConnection({
    host: process.env.DB_HOST || "172.17.0.1",
    user: process.env.DB_USER || "user",
    port: process.env.PORT || "3307",
    password: process.env.DB_PWD || "root",
    database: process.env.DB_DATABASE || "flightsearchsystem",
});


    connection.connect(function (err) {
        if (err) {
            console.error('[MYSQL] Error on Connection: ' + err.stack);
            return;
        }

        queryOnStartUp(userQueries.CREATE_USER_TABLE, err);
        console.log('[MYSQL] Connected with ID ' + connection.threadId + '!');
    });

    function queryOnStartUp(sql, err)
{
    return new Promise(resolve => {
        connection.query(sql, function (err, result) {
            if (err) {
                result.send(err);
            }
            console.log("table created or exists.")
        });
    });
}

function queryGetUsers(sql, res) {
    return new Promise(resolve => {
        connection.query(sql, function (err, result) {
            if (err) {
                res.send(err);
            }
            res.json(result);
        });
    });
}

function queryGetUser(sql, res, [params]) {
    console.log(params);
    return new Promise(resolve => {
        connection.query(sql, params, function (err, result) {
            if (err) {
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
        connection.query(sql, function (err, result) {
            if (err) {
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
        connection.query(sql, function (err, result) {
            if (err) {
                res.send(err);
            }
            console.log(res);
            res.json(result);
        });
    });
}

//return queryUser(userQueries.GET_USER_EMAIL, res,[req.body.email]);
function registerUser(req, res, [params]) {
        console.log(req.body);
        const passHash = bcrypt.hashSync(req.body.password);
        connection.query("INSERT INTO user(first_name,last_name, age, email, password) VALUES(" + '\''+  req.body.first_name +'\''+ "," + '\''+ req.body.last_name +'\''+ "," + '\''+ req.body.age+'\''+ "," +  '\''+ req.body.email +'\''+ "," + '\''+ passHash +'\'' +  " )", params,  function (err, result) {
            if (err) {
                console.log(err);
               return res.status(500).send({msg: 'user not registered'});
            }

            connection.query(userQueries.GET_USER_EMAIL, [req.body.email], function (err, user) {
                if (err) {
                  return result.status(500).send({msg: 'user not found'});
                }
                return res.send(user);
            });
        });
}

function loginUser(req, res){
        connection.query(userQueries.GET_USER_EMAIL, [req.body.email], function (err, user){
            if(err){
                res.status(500).send({msg: 'User not found'});
            }

            console.log(user);

            bcrypt.compare(req.body.password, user[0].password)
                .then(function (validPass){
                    if(!validPass){
                        res.status(400).send({msg: 'password is not correct'});
                    }
                    const token = jwt.sign({id: user[0].id}, jwtConfig.secret);
                    res.header('auth-token', token).send({auth:true, msg: 'logged in'});

                })
                .catch(console.log);
        })
}
module.exports = {
    queryGetUsers,queryGetUser,queryCreateUser,queryUpdateUser,queryDeleteUser,registerUser,loginUser
}

