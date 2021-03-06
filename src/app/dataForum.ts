import { Comment } from "./components/forum/interfaces/comment.interface";

export const dataForumAPI: Comment[] = [
    {
        id: "1642177835",
        nameSender: "Carlos",
        date: 1642177835,
        dateFormat: "",
        message:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        quantityReactions: 2,
        reactions:[
            {
                name:"like",
                userId:"1412",
                srcReactionIcon:"../../../../assets/images/comments/like.svg",
                srcUserIcon:"../../../../assets/images/comments/profile1.svg"
            },
            {
                name:"like",
                userId:"323",
                srcReactionIcon:"../../../../assets/images/comments/like.svg",
                srcUserIcon:"../../../../assets/images/comments/profile2.svg"
            }
        ],
        quantityCommentsResponse: 1,
        commentsResponse: [
            {
                date: 1642177835,
                dateFormat: "",
                message:"the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
                nameSender:"Liliana",
                iconSender: "../../../../assets/images/comments/profile3.svg"
            }
        ]
    },
    {
        id: "1642204250",
        nameSender: "Pablo",
        date: 1642204250,
        dateFormat: "",
        message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen ",
        quantityReactions: 3,
        reactions:[
            {
                name:"like",
                userId:"1432",
                srcReactionIcon:"../../../../assets/images/comments/like.svg",
                srcUserIcon:"../../../../assets/images/comments/profile1.svg"
            },
            {
                name:"like",
                userId:"343",
                srcReactionIcon:"../../../../assets/images/comments/like.svg",
                srcUserIcon:"../../../../assets/images/comments/profile2.svg"
            },
            {
                name:"like",
                userId:"3443",
                srcReactionIcon:"../../../../assets/images/comments/like.svg",
                srcUserIcon:"../../../../assets/images/comments/profile2.svg"
            }
        ],
        quantityCommentsResponse: 0,
        commentsResponse: []
    }
]
