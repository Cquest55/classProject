exports.CREATE_USERS_TABEL = `CREATE TABLE IF NOT EXISTS user(
    id int NOT NULL AUTO_INCREMENT,
    first_name varchar(255),
    last_name varchar(255),
    email varchar(50),
    password varchar(50),
    age int,
    creation_date DATETIME DEFAULT CURRENT_TIMESTAMP(),
    PRIMARY KEY (id)
    )`;

exports.INSERT_USER = `INSERT INTO user (first_name, last_name, email, age, password) VALUES (?,?,?,?,?)`;

