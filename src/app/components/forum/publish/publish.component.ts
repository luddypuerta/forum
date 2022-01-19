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

  valueChange(){
    this.isVisible = true;
  }

  publishState(){
    this.isVisible = false;
    this.inputPublish = '';
  }
  
  handlerAddComment(text:string = this.inputPublish) {
    const valueInput = text.replace(/ /g, "");
    let amountCharacter = 0;
    if (valueInput.length>0 && valueInput.length <= 255){
      this.forumService.addNewComment(valueInput);
      this.publishState();
      amountCharacter = valueInput.length;
    }
    return amountCharacter;
  }

}
