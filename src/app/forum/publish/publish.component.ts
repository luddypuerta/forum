import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.scss']
})
export class PublishComponent implements OnInit {

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
