import { Component, Input, OnInit } from '@angular/core';
import { Comment } from '../interfaces/comment.interface';
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
    this.forumService.processReactions(this.comment.id, "1092837465",objReactions.nameReaction, objReactions.pathLocal)
  }

  getSrcReactionsIcon(reaction: string){
    let path = '../../../../assets/images/comments/'
    let reactions = {
      pathLocal: "",
      nameReaction: ""
    }
    switch (reaction.toLocaleLowerCase()) {
      case "like":
        reactions = {
          pathLocal: `${path}like.svg`,
          nameReaction: "Me gusta"
        }
        break;
      case "happy":
        reactions = {
          pathLocal: `${path}happy.svg`,
          nameReaction: "Me divierte"
        }
        break;
      case "love":
        reactions = {
          pathLocal: `${path}love.svg`,
          nameReaction: "Me encanta"
        }
        break;
      case "crying":
        reactions = {
          pathLocal: `${path}crying.svg`,
          nameReaction: "Me deprime"
        }
        break;
      case "sad":
        reactions = {
          pathLocal: `${path}sad.svg`,
          nameReaction: "Me entristece"
        }
        break;
      case "boring":
        reactions = {
          pathLocal: `${path}boring.svg`,
          nameReaction: "Me aburre"
        }
        break;
    
      default:
        reactions
        break;
    }
    return reactions;
  }
}
