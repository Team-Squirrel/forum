
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