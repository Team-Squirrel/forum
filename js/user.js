import * as utils from "utils";

class User {

    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.role = "user";
        this.createdOn = utils.date.getDate();
        this.id = utils.userIdGenerator.next();
    }

    get name(){
        return this._name;
    }

    set name(name){
        if(!name){
            throw "Username cannot be null.";
        }

        if(name.length === 0){
            throw "Username cannot be empty.";
        }
        
        this._name = name;
    }

    get email() {
        return this._email;
    }

    set email(e_mail){

        if(!e_mail){
            throw "Email cannot be null.";
        }

        if(e_mail.indexOf('@') === -1){
            throw "Invalid email address.";
        }

        this._email = e_mail;
    }
}

export {
    User
};