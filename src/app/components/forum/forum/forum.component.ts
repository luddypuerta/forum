import { Component, OnInit } from '@angular/core';
import { ForumService } from '../services/forum.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {

  constructor(private forumService:ForumService) { }

  ngOnInit(): void {
  }

  get comments() {
    return this.forumService.comments
  }

}