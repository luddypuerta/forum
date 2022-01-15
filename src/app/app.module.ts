import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForumComponent } from './forum/forum.component';

// Library Ng Zorro
import { NzCommentModule } from 'ng-zorro-antd/comment';

@NgModule({
  declarations: [
    AppComponent,
    ForumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NzCommentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
