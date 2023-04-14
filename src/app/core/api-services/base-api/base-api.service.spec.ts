import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PhotoService } from '../photo/photo.service';
import { BaseApiService } from './base-api.service';

describe('BaseApiService', () => {
  let service: BaseApiService;
  let photoService: PhotoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PhotoService, BaseApiService],
    });
    service = TestBed.inject(BaseApiService);
    photoService = TestBed.inject(PhotoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have a photoApiService instance', () => {
    expect(service.photoApiService).toBeInstanceOf(PhotoService);
  });
});
