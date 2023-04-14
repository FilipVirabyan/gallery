import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {BaseApiService} from "@core/api-services/base-api/base-api.service";
import {IPhoto} from "@core/models";
import {Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {FavoritesService} from "@core/services";

@Component({
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotoDetailComponent implements OnInit{
  private _imageId = this._route.snapshot.paramMap.get('id') as string;
  photoDetails$: Observable<IPhoto> = this._baseApiService.photoApiService.getImageById(this._imageId);

  constructor(private _baseApiService: BaseApiService,
              public favoritesService: FavoritesService,
              private _route: ActivatedRoute,) {

  }

  ngOnInit() {
  }

  /**
   * Removes the specified image from the user's list of favorite images.
   *
   * @param imageId The unique identifier of the image to remove.
   *
   * @return Nothing.
   */
  removeFromFavorites(imageId: string) {
    this.favoritesService.removeImage(imageId)
  }


}
