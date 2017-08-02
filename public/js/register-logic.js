import { User } from "user";
import * as data from 'data';

export function init() {
    let $registerBtn = $("#register-button");
    let $enterPassword = $("#password");
    let $enterUsername = $("#display-name");
    let $enterEmail = $("email");

    $registerBtn.on("click", function () {
        let username = $enterUsername.val();
        let password = $enterPassword.val();
        let email  = $enterEmail.val();

        if (validate()) {
            server.authenticate().createUserWithEmailAndPassword(email, password)
                .catch(function (error) {
                    let errorCode = error.code;
                    let errorMessage = error.message;
                    alert(`${errorCode}: ${errorMessage}`);
                })
                .then(function() {
                    let user = server.authenticate().currentUser;
                    user.updateProfile({
                        displayName: username
                    }).then(function () {
                        let newUser= new User(username, email, password);
                        
                        alert(`Hello, ${user.displayName}.`);

                        sessionStorage.setItem("loggedUser", user.displayName);

                        console.log(user.displayName + ' registered successfully.');
                    
                        location.hash = "/profile";
                        data.postUser(newUser);
                    }, function (error) {
                        console.log(error);
                    }).then(function () {
                        console.log("Profile created successfully.");
                    });
                })
        }
    });

    function validate(){
        if(!(/^[0-9a-zA-Z]+$/).text($enterPassword.val())){
            alert("The password must contain only numbers and latin letters.");
            return false;
        }

        if(!($enterPassword.val())){
            alert("The password cannot be null.");
            return false;
        }

        if($enterPassword.val() === ""){
            alert("The password cannot be empty.");
            return false;
        }

        if(!(/^[0-9a-zA-Z]+$/).test($enterUsername.val())){
            alert("The username must contain only numbers and latin letters.");
            return false;
        }

        if($enterUsername.val() === ""){
            alert("The username cannot be empty.");
            return false;
        }

        if(!(/^[0-9a-zA-Z@.]+$/).test($enterEmail.val())){
            alert("The email address must contain only numbers, latin letters and the symbol '@'.");
            return false;
        }

        if($enterEmail.val() === ""){
            alert("The email address cannot be empty.");
            return false;
        }

        if($enterEmail.val().indexOf('@') === -1){
            alert('Invalid email address.');
            return false;
        }

        return true;
    }
}