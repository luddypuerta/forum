import { CommentResponse } from "./comment-response.interface";

export interface Comment {
    id:string,
    nameSender: string,
    date: number,
    dateFormat: string,
    message: string,
    reactions: number,
    quantityCommentsResponse: number,
    commentsResponse: CommentResponse[]
}