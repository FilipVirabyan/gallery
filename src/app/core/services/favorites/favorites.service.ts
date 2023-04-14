import {Injectable} from '@angular/core';
import {StorageService} from "@core/services";

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  public favoritesSet: Set<string> = new Set<string>(this._storageService.storageImages)

  get favorites(): string[] {
    return Array.from(this.favoritesSet.values())
  }

  constructor(private _storageService: StorageService) {
  }

  /**
   * Adds the specified image ID to the set of favorites.
   *
   * @param imageId The unique identifier of the image to be added to the favorites.
   *
   * @return Nothing.
   */
  addImage(imageId: string) {
    if (this.favoritesSet.has(imageId)) {
      return
    }
    this.favoritesSet.add(imageId)
    this._storageService.storageImages = Array.from(this.favoritesSet.values())
  }

  /**
   * Removes the specified image ID from the set of favorites.
   *
   * @param imageId The unique identifier of the image to be removed from the favorites.
   *
   * @return Nothing.
   */
  removeImage(imageId: string) {
    if (!this.favoritesSet.has(imageId)) {
      return
    }
    this.favoritesSet.delete(imageId)
    this._storageService.storageImages = Array.from(this.favoritesSet.values())
  }
}
