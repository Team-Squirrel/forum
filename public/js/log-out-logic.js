export function init() {
    let user = server.authenticate().currentUser;

    server.authenticate().signOut()
        .then(function () {
            console.log(iser._name + 'logged out successfully.');
            location.hash = "/home";
        })
        .catch(function(error) {
            alert(error.message);
        });
};