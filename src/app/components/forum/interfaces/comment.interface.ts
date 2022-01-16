import { CommentResponse } from "./comment-response.interface";

export interface Comment {
    id:string,
    nameSender: string,
    date: string,
    message: string,
    reactions: number,
    quantityCommentsResponse: number,
    commentsResponse: CommentResponse[]
}