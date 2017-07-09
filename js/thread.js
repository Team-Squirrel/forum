import * as utils from "utils";
import { Post } from "post";

class Thread extends Post  {

    constructor(posterName, content, threadName) {
        super(posterName, content);
        this.threadName = threadName;
        this.createdOn = utils.date.getDate();
        this.id = utils.threadIdGenerator.next();
        this.posts = [];
    }

    get threadName(){
        return this._threadName;
    }

    set threadName(threadName){
        if(!threadName){
            throw "Thread name cannot be null.";
        }

        if(threadName.length === 0){
            throw "Thread name cannot be empty.";
        }
        
        this._threadName = threadName;
    }

}

export {
    Thread
};