import {queryGetUser,queryCreateUser,queryUpdateUser} from '../config/dbConfig';
import {queryGetUsers}  from '../config/dbConfig';
import * as queryDeleteUser from '../config/dbConfig';
import {userQueries} from '../queries/userQueries';

export class userController {
    static getAllUsers(req, res)  {
        queryGetUsers(userQueries.ALL_USERS, res);
    };

    static getUser(req, res) :any{
        console.log(req);
        queryGetUser(userQueries.getUserQuery(req.body.userId),  res);
    };

    static createUser(req, res) :any{
        queryCreateUser(userQueries.insertQuery(req.body.first_name, req.body.last_name,req.body.age, req.body.email, req.body.password), res);
    };

    static updateUser(req, res) :any{
        console.log(req.body.first_name, req.body.userId);
        queryUpdateUser(userQueries.updateQuery(req.body.first_name,req.body.userId), res, [req.body.first_name, req.body.userId]);
    };

    static deleteUser(req, res) :any{
        queryDeleteUser(userQueries.deleteQuery(req.body.userId),res);
    };
}
