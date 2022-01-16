import { Component, OnInit } from '@angular/core';
import { ForumService } from '../services/forum.service';

@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.scss']
})
export class PublishComponent implements OnInit {

  isVisible:boolean = false;
  inputPublish:string = '';

  constructor(private forumService: ForumService) { }

  ngOnInit(): void {
  }

  valuechange(){
    this.isVisible = true;
    console.log(this.isVisible);
  }

  publishState(){
    this.isVisible = false;
    this.inputPublish = '';
  }
  
  handlerAddComment() {
    const valueInput = this.inputPublish.trim();
    if ( !valueInput.length ) return; 
    
    this.forumService.addNewComment(valueInput);

    this.publishState()

  }

}
