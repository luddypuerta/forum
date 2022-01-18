import { Injectable } from "@angular/core";
import { dataForumAPI } from "src/app/dataForum";
import { CommentResponse } from "../interfaces/comment-response.interface";
import { Comment } from "../interfaces/comment.interface";
import { getElapsedTime, getCurrentDateInNumber } from "src/app/utils/date.utilities";
import { ReactionUser } from "../interfaces/reaction-user.interface";

@Injectable()
export class ForumService {

    private __comments: Comment[] = [];

    get comments(): Comment[] {
        this.__comments.forEach(element => {
            element.dateFormat = getElapsedTime(element.date);
            element.commentsResponse.forEach( elementChild => {
                elementChild.dateFormat = getElapsedTime(elementChild.date);
            });
        });
        return [...this.__comments];
    }

    constructor() {
        const commentsLocal: Comment[] = JSON.parse(localStorage.getItem('allComments')!) || [];
        
        if (commentsLocal.length == 0) {
            const commnetsAPI = this.getAllCommentAPI();
            this.__comments = commnetsAPI;
            localStorage.setItem('allComments', JSON.stringify(this.__comments));
        } else {
           this.__comments = commentsLocal;
        }
    }
    
    addNewComment(message: string) {
       
        const currentDate = getCurrentDateInNumber();

        const newComment: Comment = {
            id:`${currentDate}`,
            nameSender: "Liliana",
            date: currentDate,
            dateFormat:getElapsedTime(currentDate),
            message,
            quantityReactions: 0,
            reactions: [],
            quantityCommentsResponse: 0,
            commentsResponse: []
        }

        this.__comments.push(newComment);
        localStorage.setItem('allComments', JSON.stringify(this.__comments));
    }

    addNewCommentResponse(idComment: string, message: string) {
        const currentDate = getCurrentDateInNumber();
        
        const newCommentResponse: CommentResponse = {
            nameSender: "Liliana",
            date: currentDate,
            dateFormat: getElapsedTime(currentDate),
            message
        }
        for (const comment of this.__comments) {
            if (comment.id === idComment) {
                comment.commentsResponse.push(newCommentResponse);
                comment.quantityCommentsResponse = comment.commentsResponse.length;
                break;
            }
        }
        localStorage.setItem('allComments', JSON.stringify(this.__comments));
    }

    getAllCommentAPI(): Comment[] {
        return this.__comments = [...dataForumAPI];
    }

    processReactions(idComment: string, userId: string, nameReactions: string, srcReactionIcon: string) {
        const newReaction: ReactionUser = {
            name: nameReactions,
            srcReactionIcon,
            userId
        };

        for (const comment of this.__comments) {
            if (comment.id === idComment) {
                let reactions = comment.reactions;
                if (reactions.length === 0) {
                    reactions.push(newReaction);
                    comment.selfReaction = newReaction
                } else {
                    const index = reactions.findIndex(element => element.userId);
                    if (index == -1) {
                        reactions.push(newReaction);
                        comment.selfReaction = newReaction
                    } else {
                        if (reactions[index].name == nameReactions) {
                            reactions.splice(index,1);
                            comment.selfReaction = undefined
                        } else {
                            reactions[index].name= nameReactions
                            comment.selfReaction = newReaction
                        }
                    }
                }
                comment.quantityReactions = comment.reactions.length;
                break;
            }
        }
        localStorage.setItem('allComments', JSON.stringify(this.__comments));
    }
}
