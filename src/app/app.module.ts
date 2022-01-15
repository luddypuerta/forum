import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForumComponent } from './forum/forum.component';

// Library Ng Zorro
import { NzCommentModule } from 'ng-zorro-antd/comment';
import { CommentsComponent } from './forum/comments/comments.component';
import { PublishComponent } from './forum/publish/publish.component';

@NgModule({
  declarations: [
    AppComponent,
    ForumComponent,
    CommentsComponent,
    PublishComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NzCommentModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
