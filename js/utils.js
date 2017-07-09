
let date = (function() {
    function getDate(params){
        let today = new Date();
        let day = today.getDate();
        let month = today.getMonth() + 1;
        let year = today.getFullYear();
        let hour = today.getHours();
        let minute = today.getMinutes();

        if (hour < 10) {
            hour = "0" + hour;
        }

        if(minute < 10){
            minute = "0" + minute;
        }

        if(day < 10){
            day = "0" + day;
        }

        if(month < 10){
            month = "0" + month;
        }

        today = `${day}/${month}/${year}, ${hours}:${minutes} o'clock`;

        return today;
    }

    return {
        getDate
    }

})();

let fileIdGenerator = (function () {
    let id = 0;

    let next = function(id){
        id += 1;
        return id;
    }

    return {
        next: next
    };
})();

let threadIdGenerator = (function () {
    let id = 0;
    
    let next = function(id){
        id += 1;
        return id;
    }

    return {
        next: next
    }
})();

let userIdGenerator = (function () {
    let id = 0;

    let next = function(id){
        id += 1;
        return id;
    }

    return{
        next:next
    }

})();

let postIdGenerator = (function () {
    let id = 0;

    let next = function(id){
        id += 1;
        return id;
    }

    return{
        next:next
    }

})();

export {
    date,
    fileIdGenerator,
    threadIdGenerator,
    userIdGenerator,
    postIdGenerator
}