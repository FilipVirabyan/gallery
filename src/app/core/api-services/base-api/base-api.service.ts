import {Injectable} from '@angular/core';
import {PhotoService} from "../photo/photo.service";

@Injectable({
  providedIn: 'root'
})
export class BaseApiService {

  constructor(public photoApiService: PhotoService) {
  }
}
