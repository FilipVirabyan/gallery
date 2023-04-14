import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FavoritesRoutingModule} from './favorites-routing.module';
import {FavoritesComponent} from "@views/favorites/pages/favorites/favorites.component";
import {ListContainerComponent, ListPhotoComponent} from "@shared/components";

@NgModule({
  declarations: [FavoritesComponent],
  imports: [
    CommonModule,
    FavoritesRoutingModule,
    ListContainerComponent,
    ListPhotoComponent
  ]
})
export class FavoritesModule {
}
