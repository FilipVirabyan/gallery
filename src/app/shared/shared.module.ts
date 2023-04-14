import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ImageUrlPipe} from "./pipes";
@NgModule({
  declarations: [
    ImageUrlPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ImageUrlPipe
  ]
})
export class SharedModule { }
