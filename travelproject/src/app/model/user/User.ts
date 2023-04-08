class User {
    private _firstName: string;
    private _lastName: string;
    private _age: string;
    private _username: string;
    private _password:string;

    get firstName(): string {
        return this._firstName;
    }

    set firstName(value: string) {
        this._firstName = value;
    }

    get lastName(): string {
        return this._lastName;
    }

    set lastName(value: string) {
        this._lastName = value;
    }

    get age(): string {
        return this._age;
    }

    set age(value: string) {
        this._age = value;
    }

    get username(): string {
        return this._username;
    }

    set username(value: string) {
        this._username = value;
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        this._password = value;
    }


    constructor(firstName: string, lastName: string, age: string, username: string, password: string) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
        this._username = username;
        this._password = password;
    }
}