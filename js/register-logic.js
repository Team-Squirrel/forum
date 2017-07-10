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

    

}