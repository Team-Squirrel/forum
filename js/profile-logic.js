import * as data from 'data';

//TO DO: 
// user threads
// user posts
// user notifications
// settings

export function init() {
    let $profileUsername = $(".username-span");
    let $profileEmail = $(".email-span");

    data.getUser()
        .then(function (snapUser) {
            let user = snapUser.val();
            $profileUsername.html(user._name);
            $profileEmail.html(user._email);
        })
};