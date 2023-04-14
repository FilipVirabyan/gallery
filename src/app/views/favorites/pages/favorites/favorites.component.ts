import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FavoritesService} from "@core/services";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavoritesComponent {
  favorites: string[] = this._favoritesService.favorites;

  constructor(private _favoritesService: FavoritesService) {

  }
}
