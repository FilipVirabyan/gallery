import {Pipe, PipeTransform} from '@angular/core';
import {environment} from "@env";

@Pipe({
  name: 'imageUrl'
})
export class ImageUrlPipe implements PipeTransform {
  /**
   * Transforms the given image ID and size into a URL string.
   *
   * @param id The unique identifier of the image.
   * @param size The desired size of the image in pixels.
   *
   * @return A URL string representing the image with the given ID and size.
   */
  transform(id: string, size: number): string {
    return `${environment.baseApi}id/${id}/${size}.jpg`;
  }

}
