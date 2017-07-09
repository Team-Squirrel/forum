// Posts
export function getThreadPosts(threadName){
    let url = `/data/saved-threads/${threadName}`;

    return server.database().reference(url).once('value');
}

export function getUserPosts(){
    let user = server.authenticate().currentUser;
    let url = `/data/users/${user._name}/saved-posts/`;

    return server.database().reference(url).once('value');
}

export function postPost(threadName, post){
    let user = server.authenticate().currentUser;
    let url = `/data/saved-threads/${threadName}`;
    let urlUser = `/data/users/${user._name}/saved-posts/`;
    let updates = {};

    updates[url + post.id] = post;
    updates[urlUser + post.id] = post;

    return server.database().reference().update(updates);
}

// Threads
export function getThreads(){
    let url = `/data/saved-threads/`;

    return server.database().reference(url).once('value');
}

export function getUserThreads(){
    let user = server.authenticate().currentUser;
    let url = `/data/users/${user._name}/saved-threads/`;

    return server.database().reference(url).once('value');
}

export function postThread(thread){
    let user = server.authenticate().currentUser;
    let url = `/data/saved-threads/`;
    let urlUser = `/data/users/${user._name}/saved-threads/`;
    let updates = {};

    updates[url + thread._name] = thread;
    updates[urlUser + thread._name] = thread;

    return server.database().reference().update(updates);
}

// Users
export function postUser(newUser){
    let user = server.authenticate().currentUser;;
    let url = `/data/users/${user._name}`;
    let updates = {};

    updates[url] = newUser;
    return server.database().reference().update(updates);
}

export function getUser() {
    let user = server.authenticate().currentUser;
    let url = `/data/users/${user._name}`;
    let result = server.database().reference(url).once('value');
    return result;
}

export function getUsers(){
    let url = `data/users/`;

    return server.database().reference(url).once('value');
}