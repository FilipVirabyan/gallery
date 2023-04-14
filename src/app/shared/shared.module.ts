import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ImageUrlPipe} from "./pipes";
import {InfiniteScrollDirective} from "@shared/directives";
@NgModule({
  declarations: [
    ImageUrlPipe,
    InfiniteScrollDirective
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    ImageUrlPipe,
    InfiniteScrollDirective
  ]
})
export class SharedModule { }
