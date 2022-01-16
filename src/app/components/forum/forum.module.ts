import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "src/app/app-routing.module";

import { CommentsComponent } from "./comments/comments.component";
import { ForumComponent } from "./forum/forum.component";
import { PublishComponent } from "./publish/publish.component";
import { ForumService } from "./services/forum.service";

@NgModule({
    declarations: [
        CommentsComponent,
        PublishComponent,
        ForumComponent
    ],
    exports: [
        ForumComponent
    ],
    imports: [
      CommonModule,
      FormsModule,
      AppRoutingModule
    ],
    providers: [
        ForumService
    ]
})

export class ForumModule {}