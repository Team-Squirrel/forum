import User from "user";

class Admin extends User {

    constructor() {
        super(name, email, password);
        this.role = "admin";
    }
}

export {
    Admin
};