import { Component, OnInit } from '@angular/core';
import { ForumService } from '../services/forum.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  inputCommentResponse: string = ''

  constructor(private forumService:ForumService) { }

  ngOnInit(): void {
  }

  get comments() {
    return this.forumService.comments
  }

  clearState(){
    this.inputCommentResponse = ''
  }
  
  handlerAddNewCommentResponse(idComment: string) {
    const valueInput = this.inputCommentResponse.trim()
    if ( valueInput.length === 0 ) { return; }

    this.forumService.addNewCommentResponse(idComment, this.inputCommentResponse)

    this.clearState()
  }

}
