import * as utils from "utils";

class Post {

    constructor(posterName, content) {
        this.posterName = posterName;
        this.content = content;
        this.createdOn = utils.date.getDate();
        this.id = utils.postIdGenerator.next();
    }

    get posterName(){
        return this._posterName;
    }

    set posterName(posterName){
        if(!posterName){
            throw "Username cannot be null.";
        }

        if(posterName.length === 0){
            throw "Username cannot be empty.";
        }
        
        this._posterName = posterName;
    }

    get content() {
        return this._content;
    }

    set content(content){

        if(!content){
            throw "Content cannot be null.";
        }

        if(content.length === 0){
            throw "Content cannot be empty.";
        }

        this._content = content;
    }
}

export {
    Post
};