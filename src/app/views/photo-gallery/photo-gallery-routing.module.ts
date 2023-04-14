import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PhotoGalleryComponent} from "@views/photo-gallery/pages/photo-gallery/photo-gallery.component";
import {PhotoDetailComponent} from "@views/photo-gallery/pages/photo-detail/photo-detail.component";

const routes: Routes = [
  {
    path: '',
    component: PhotoGalleryComponent
  },
  {
    path: ':id',
    component: PhotoDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotoGalleryRoutingModule { }
