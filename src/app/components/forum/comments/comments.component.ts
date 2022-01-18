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
    this.forumService.processReactions(this.comment.id, "1092837465",reaction, this.getSrcReactionsIcon(reaction))
  }

  getSrcReactionsIcon(reaction: string){
    let pathLocal = '../../../../assets/images/comments/'
    switch (reaction.toLocaleLowerCase()) {
      case "like":
        pathLocal+="like.svg";
        break;
      case "happy":
        pathLocal+="like.svg";
        break;
      case "love":
        pathLocal+="like.svg";
        break;
      case "crying":
        pathLocal+="like.svg";
        break;
      case "sad":
        pathLocal+="like.svg";
        break;
      case "boring":
        pathLocal+="like.svg";
        break;
    
      default:
        pathLocal="";
        break;
    }
    return pathLocal;
  }
}
