export class userQueries {

    constructor() {
    }

    static CREATE_USER_TABLE: string = `CREATE TABLE IF NOT EXISTS user(
    id int NOT NULL AUTO_INCREMENT,
    first_name varchar(255),
    last_name varchar(255),
    age int,
    creation_date DATETIME DEFAULT CURRENT_TIMESTAMP(),
    PRIMARY KEY (id)
    )`;

    static ALL_USERS: string = `SELECT * FROM user`;
    static GET_USER: string = `SELECT * FROM user WHERE id = id`;

    //TODO:prevent sqlinject
    static updateQuery(firstName:string, id:Number){
        return "UPDATE user SET first_name=" + '\''+ firstName +'\'' + " WHERE id="+ id;
    }

    //TODO:prevent sqlinject
    static insertQuery(firstName:string, lastName:string,  age:String){
        return "INSERT INTO user(first_name,last_name, age) VALUES(" + '\''+  firstName +'\''+ "," + '\''+ lastName +'\''+ "," + '\''+ age+'\'' + " )";
    }

    //TODO:prevent sqlinject
    static deleteQuery(id:Number){
        return "DELETE FROM user WHERE id="+ id;
    }
}
