import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

import {PhotoService} from './photo.service';
import {IPhoto} from '../../models';
import {environment} from '../../../../environments/environment';

describe('PhotoService', () => {
  let service: PhotoService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PhotoService],
    });
    service = TestBed.inject(PhotoService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('getListOfImages', () => {
    it('should fetch a list of images from the API', () => {
      const mockImages: IPhoto[] = [
        {
          id: '1',
          url: 'http://example.com/1.jpg',
          download_url: 'http://example.com/1.jpg',
          author: 'test',
          height: 500,
          width: 500
        },
        {
          id: '2',
          url: 'http://example.com/2.jpg',
          download_url: 'http://example.com/2.jpg',
          author: 'test',
          height: 500,
          width: 500
        },
      ];
      const page = 1;
      const limit = 10;
      service.getListOfImages(page, limit).subscribe((images) => {
        expect(images).toEqual(mockImages);
      });
      const req = httpMock.expectOne(`${environment.baseApi}v2/list?page=${page}&limit=${limit}`);
      expect(req.request.method).toBe('GET');
      req.flush(mockImages);
    });
  });

  describe('getImageById', () => {
    it('should fetch the metadata of an image by its ID', () => {
      const mockImage: IPhoto = {
        id: '1',
        url: 'http://example.com/1.jpg',
        download_url: 'http://example.com/1.jpg',
        author: 'test',
        height: 500,
        width: 500
      };
      const imageId = '1';
      service.getImageById(imageId).subscribe((image) => {
        expect(image).toEqual(mockImage);
      });
      const req = httpMock.expectOne(`${environment.baseApi}/id/${imageId}/info`);
      expect(req.request.method).toBe('GET');
      req.flush(mockImage);
    });
  });
});
