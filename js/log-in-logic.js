import * as data from 'data';
import { User } from "user";

export function init() {
    let $loginPassword = $("#password");
    let $loginEmail = $("#email");
    let $loginBtn = $("#submit-button");

    $loginBtn.on("click", function () {
        let password = $loginPassword.val();
        let email = $loginEmail.val();

        if(validateLogin()){
            server.authenticate().signinWithEmailAndPassword(email, password).catch(function (error){
                let errorCode = error.code;
                let errorMessage = error.message;
                alert(`${errorCode}: ${errorMessage}`);
            }).then(function () {
                let user = server.authenticate().currentUser;
                alert(`Hello, ${user._name}.`);
                sessionStorage.setItem("userLogged", user._name);
                location.hash = "/profile";
                console.log(user._name + ' successfully logged in.')
            });
        }
    })
};