import * as queryUser from '../config/dbConfig';
import * as query from '../config/dbConfig';
import * as queryDeleteUser from '../config/dbConfig';
import {userQueries} from '../queries/userQueries';

import bcrypt from "bcryptjs";   // this is working
export class userController {
    static getAllUsers(req, res)  {
        query(userQueries.ALL_USERS, res);
    };

    static getUser(req, res, byEmail?) :any{
        if(byEmail){
            return queryUser(userQueries.GET_USER_EMAIL, res,[req.body.email]);
        }
        queryUser(userQueries.GET_USER,  res, [req.body.userId]);
    };

    static createUser(req, res) :any{
        queryUser(userQueries.insertQuery(req.body.first_name, req.body.last_name,req.body.age, req.body.email, req.body.password), res);
    };

    static updateUser(req, res) :any{
        console.log(req.body.first_name, req.body.userId);
        queryUser(userQueries.updateQuery(req.body.first_name,req.body.userId), res, [req.body.first_name, req.body.userId]);
    };

    static deleteUser(req, res) :any{
        queryDeleteUser(userQueries.deleteQuery(req.body.userId),res);
    };
}
