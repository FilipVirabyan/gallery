import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPhoto} from "../../models";
import {environment} from "@env";
import {IMAGES_LIST_LIMIT_PER_PAGE} from "../../constants";

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private _httpClient: HttpClient) {
  }

  /**
   * Fetches a list of images from the API.
   *
   * @param page The page number to fetch.
   * @param limit The maximum number of images to fetch.
   *
   * @return An Observable emitting an array of IPhoto objects.
   */
  getListOfImages(page: number = 0, limit: number = IMAGES_LIST_LIMIT_PER_PAGE): Observable<IPhoto[]> {
    const url = `${environment.baseApi}v2/list?page=${page}&limit=${limit}`

    return this._httpClient.get<IPhoto[]>(url);
  }

  /**
   * Returns an Observable of type IPhoto that represents the metadata of the image with the specified ID.
   *
   * @param imageId The unique identifier of the image to be fetched.
   *
   * @return An Observable of type IPhoto representing the metadata of the requested image.
   */
  getImageById(imageId: string): Observable<IPhoto> {
    const url = `${environment.baseApi}/id/${imageId}/info`

    return this._httpClient.get<IPhoto>(url);
  }
}
