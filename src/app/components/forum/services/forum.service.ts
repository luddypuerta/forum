import { Injectable } from "@angular/core";
import { dataForumAPI } from "src/app/dataForum";
import { Comment } from "../interfaces/comment.interface";

@Injectable()
export class ForumService {

    private __comments: Comment[] = [];

    get comments(): Comment[] {
        return [...this.__comments];
    }

    constructor() {
        this.__comments = [...dataForumAPI]
    }
    
    addNewComment(message: string) {
        const newComment: Comment = {
            nameSender: "Liliana",
            date: "hace 1 hora",
            message,
            reactions: 0,
            commentsChild: 0
        }
        this.__comments.push(newComment)
    }
}