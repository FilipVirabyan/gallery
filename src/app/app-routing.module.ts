import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'photos',
    loadChildren: () => import('./views/photo-gallery/photo-gallery.module').then((m) => m.PhotoGalleryModule)
  },
  {
    path: 'favorites',
    loadChildren: () => import('./views/favorites/favorites.module').then((m) => m.FavoritesModule)
  },
  {
    path: '**',
    redirectTo: 'photos'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
