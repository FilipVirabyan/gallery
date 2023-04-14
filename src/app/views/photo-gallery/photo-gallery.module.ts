import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoGalleryRoutingModule } from './photo-gallery-routing.module';
import { PhotoGalleryComponent } from './pages/photo-gallery/photo-gallery.component';
import {ListContainerComponent, ListPhotoComponent, SpinnerComponent} from "../../shared/components";
import {SharedModule} from "@shared/shared.module";


@NgModule({
  declarations: [
    PhotoGalleryComponent
  ],
  imports: [
    CommonModule,
    PhotoGalleryRoutingModule,
    ListContainerComponent,
    ListPhotoComponent,
    SharedModule,
    SpinnerComponent
  ]
})
export class PhotoGalleryModule { }
