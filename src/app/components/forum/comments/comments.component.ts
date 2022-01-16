import { Component, OnInit } from '@angular/core';
import { ForumService } from '../services/forum.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  constructor(private forumService:ForumService) { }

  ngOnInit(): void {
  }

  get comments() {
    return this.forumService.comments
  }

}
