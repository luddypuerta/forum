import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderModule } from './components/header/header.module';
import { ForumModule } from './components/forum/forum.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    ForumModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
