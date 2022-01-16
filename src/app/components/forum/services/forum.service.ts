import { Injectable } from "@angular/core";
import { dataForumAPI } from "src/app/dataForum";
import { CommentResponse } from "../interfaces/comment-response.interface";
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
            
            id:`${new Date().getTime}`,
            nameSender: "Liliana",
            date: "hace 1 hora",
            message,
            reactions: 0,
            quantityCommentsResponse: 0,
            commentsResponse: []
        }
        this.__comments.push(newComment)
    }

    addNewCommentResponse(idComment: string, message: string) {
        const newCommentResponse: CommentResponse = {
            nameSender: "Liliana",
            date: "just now",
            message
        }
        for (const comment of this.__comments) {
            if (comment.id === idComment) {
                comment.commentsResponse.push(newCommentResponse)
                comment.quantityCommentsResponse = comment.commentsResponse.length
                break
            }
        }
    }
}