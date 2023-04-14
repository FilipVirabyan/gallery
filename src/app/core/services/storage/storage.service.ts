import {Injectable} from '@angular/core';
import {FAVORITES_KEY} from "../../constants";

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  /**
   * Retrieves the array of favorite image IDs from the browser's localStorage.
   *
   * @return An array of favorite image IDs.
   */
  get storageImages() {
    return JSON.parse(localStorage.getItem(FAVORITES_KEY) as string) || []
  }

  /**
   * Sets the array of favorite image IDs in the browser's localStorage.
   *
   * @param images An array of favorite image IDs to be stored.
   *
   * @return Nothing.
   */
  set storageImages(images) {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(images))
  }

  constructor() {
  }
}
