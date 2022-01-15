import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  isVisible:boolean = false;
  inputPublish:string = '';

  constructor() { }

  ngOnInit(): void {
  }

  valuechange(){
    this.isVisible = true;
  }

  publishState(){
    this.isVisible = false;
    this.inputPublish = '';
  }

}
