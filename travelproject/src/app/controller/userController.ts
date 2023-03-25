import * as queryUser from '../config/dbConfig';
import * as queryCreateUser from '../config/dbConfig';
import * as query from '../config/dbConfig';
import * as queryUpdateUser from '../config/dbConfig';
import * as queryDeleteUser from '../config/dbConfig';
import {userQueries} from '../queries/userQueries';

export class userController {
    static getAllUsers(req, res)  {
        query(userQueries.ALL_USERS, res);
    };

    static getUser(req, res) :any{
        queryUser(userQueries.GET_USER,  res, [req.body.userId]);
    };

    static createUser(req, res) :any{
        queryUser(userQueries.insertQuery(req.body.first_name, req.body.last_name,req.body.age), res);
    };

    static updateUser(req, res) :any{
        console.log(req.body.first_name, req.body.userId);
        queryUser(userQueries.updateQuery(req.body.first_name,req.body.userId), res, [req.body.first_name, req.body.userId]);
    };

    static deleteUser(req, res) :any{
        queryDeleteUser(userQueries.deleteQuery(req.body.userId),res);
    };
}
