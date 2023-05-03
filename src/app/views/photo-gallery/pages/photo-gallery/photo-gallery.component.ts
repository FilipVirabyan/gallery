import {Component, OnInit} from '@angular/core';
import {IPhoto} from "@core/models";
import {BaseApiService} from "@core/api-services";
import {delay, finalize} from "rxjs";
import {ArithmeticHelper} from "@core/helpers";
import {FavoritesService} from "@core/services";

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.scss']
})
export class PhotoGalleryComponent implements OnInit {
  images: IPhoto[] = [];
  loading: boolean = false;
  private _page: number = 1;

  constructor(private _baseApiService: BaseApiService,
              public favoritesService: FavoritesService) {
  }

  ngOnInit() {
    this.loadMoreImages(false)

  }

  /**
   * Loads more images from the API and appends them to the existing list of images.
   *
   * @param needDelay A flag indicating whether or not a delay is needed before making the API request.
   *
   * @return Nothing.
   */
  loadMoreImages(needDelay: boolean = true) {
    if (this.loading) {
      return
    }
    this.loading = true;
    const delayTime = needDelay ? ArithmeticHelper.getRandomNumberInRange(200, 300) : 0;
    this._baseApiService.photoApiService.getListOfImages(this._page)
      .pipe(
        delay(delayTime),
        finalize(() => this.loading = false)
      ).subscribe(
      (response: IPhoto[]) => {
        this.images.push(...response);
        this._page++;
      }
    );
  }

  trackByFn(index:number, item:IPhoto) {
    return item.id;
  }

}
