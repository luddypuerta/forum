import { Component, Input, OnInit } from '@angular/core';
import { Comment } from '../interfaces/comment.interface';
import { ReactionUser } from '../interfaces/reaction-user.interface';
import { Reaction } from '../interfaces/reaction.interface';
import { ForumService } from '../services/forum.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  @Input() comment!: Comment;

  inputCommentResponse: string = '';
  isShowAllComments: boolean = false;
  isShowAddCommentResponse: boolean = false;
  isVisible:boolean = false;

  constructor(private forumService:ForumService) { }

  ngOnInit(): void {
  }

  clearState(){
    this.inputCommentResponse = '';
  }
  
  handlerAddNewCommentResponse(idComment: string) {
    const valueInput = this.inputCommentResponse.trim();
    if ( valueInput.length === 0 ) { return; }

    this.forumService.addNewCommentResponse(idComment, this.inputCommentResponse);

    this.clearState();
    this.toggleNewCommentResponse();
    if (!this.isShowAllComments) { this.toggleAllComments() }
    this.isShowAllComments = false;
  }

  toggleAllComments() {
    this.isShowAllComments = !this.isShowAllComments;
    this.isShowAddCommentResponse = false;
  }

  toggleNewCommentResponse() {
    this.isShowAddCommentResponse = !this.isShowAddCommentResponse;
    this.isShowAllComments = false;
  }

  showReactions() {
    this.isVisible = !this.isVisible;
  }

  processReactions(reaction: string) {
    
    const objReactions =  this.getSrcReactionsIcon(reaction);

    if (objReactions) {
      const newReaction: ReactionUser = {
        name: objReactions.name,
        srcReactionIcon: objReactions.srcIcon,
        userId: "1092837465",
        srcUserIcon: "../../../../assets/images/comments/profile3.svg"
      };

      this.forumService.processReactions(this.comment.id, newReaction)
    }

  }

  getSrcReactionsIcon(reaction: string):Reaction | null  {
    let path = '../../../../assets/images/comments/';
    let reactions:Reaction | null = null;

    switch (reaction.toLocaleLowerCase()) {
      case "like":
        return reactions = {
          name: "Me gusta",
          srcIcon: `${path}like.svg`
        };
      case "happy":
        return reactions = {
          srcIcon: `${path}happy.svg`,
          name: "Me divierte"
        };
      case "love":
        return reactions = {
          srcIcon: `${path}love.svg`,
          name: "Me encanta"
        };
      case "crying":
        return reactions = {
          srcIcon: `${path}crying.svg`,
          name: "Me deprime"
        };
      case "sad":
        return reactions = {
          srcIcon: `${path}sad.svg`,
          name: "Me entristece"
        };
      case "boring":
        return reactions = {
          srcIcon: `${path}boring.svg`,
          name: "Me aburre"
        }
    
      default:
        return reactions
    }
    
  }
}
