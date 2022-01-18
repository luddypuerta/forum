import { CommentResponse } from "./comment-response.interface";
import { ReactionUser } from "./reaction-user.interface";

export interface Comment {
    id:string,
    nameSender: string,
    date: number,
    dateFormat: string,
    message: string,
    quantityReactions: number,
    reactions:ReactionUser[], 
    quantityCommentsResponse: number,
    commentsResponse: CommentResponse[],
    selfReaction?: ReactionUser
}
