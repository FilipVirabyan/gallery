import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoGalleryRoutingModule } from './photo-gallery-routing.module';
import { PhotoGalleryComponent } from './pages/photo-gallery/photo-gallery.component';
import {ListContainerComponent, ListPhotoComponent} from "../../shared/components";


@NgModule({
  declarations: [
    PhotoGalleryComponent
  ],
  imports: [
    CommonModule,
    PhotoGalleryRoutingModule,
    ListContainerComponent,
    ListPhotoComponent
  ]
})
export class PhotoGalleryModule { }
