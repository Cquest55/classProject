export class userQueries {

    constructor() {
    }

    static CREATE_USER_TABLE: string = `CREATE TABLE IF NOT EXISTS user(
    id int NOT NULL AUTO_INCREMENT,
    first_name varchar(255),
    last_name varchar(255),
    age int,
    password varchar(50),
    email varchar(50),
    creation_date DATETIME DEFAULT CURRENT_TIMESTAMP(),
    PRIMARY KEY (id)
    )`;

    static ALL_USERS: string = `SELECT * FROM user`;
    static GET_USER: string = `SELECT * FROM user WHERE id = id`;
    static GET_USER_EMAIL: string = `SELECT * FROM user WHERE email = ?`;

    //TODO:prevent sqlinject
    static updateQuery(firstName:string, id:Number){
        return "UPDATE user SET first_name=" + '\''+ firstName +'\'' + " WHERE id="+ id;
    }

    //TODO:prevent sqlinject
    static insertQuery(firstName:string, lastName:string,  age:String, email:string, password:string){
        return "INSERT INTO user(first_name,last_name, age, email, password) VALUES(" + '\''+  firstName +'\''+ "," + '\''+ lastName +'\''+ "," + '\''+ age+'\''+ "," +  '\''+ email +'\''+ "," + '\''+ password +'\'' +  " )";
    }

    //TODO:prevent sqlinject
    static deleteQuery(id:Number){
        return "DELETE FROM user WHERE id="+ id;
    }
}
