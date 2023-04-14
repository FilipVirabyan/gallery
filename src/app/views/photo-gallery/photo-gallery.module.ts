import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoGalleryRoutingModule } from './photo-gallery-routing.module';
import { PhotoGalleryComponent } from './pages/photo-gallery/photo-gallery.component';
import {ListContainerComponent, ListPhotoComponent, SpinnerComponent} from "@shared/components";
import {SharedModule} from "@shared/shared.module";
import {PhotoDetailComponent} from "@views/photo-gallery/pages/photo-detail/photo-detail.component";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    PhotoGalleryComponent,
    PhotoDetailComponent
  ],
  imports: [
    CommonModule,
    PhotoGalleryRoutingModule,
    ListContainerComponent,
    ListPhotoComponent,
    SharedModule,
    SpinnerComponent,
    MatButtonModule
  ]
})
export class PhotoGalleryModule { }
