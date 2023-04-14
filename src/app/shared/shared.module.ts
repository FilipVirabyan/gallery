import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ImageUrlPipe} from "./pipes";
import {AddHeartIconDirective, InfiniteScrollDirective} from "@shared/directives";
@NgModule({
  declarations: [
    ImageUrlPipe,
    InfiniteScrollDirective,
    AddHeartIconDirective
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ImageUrlPipe,
    InfiniteScrollDirective,
    AddHeartIconDirective
  ]
})
export class SharedModule { }
