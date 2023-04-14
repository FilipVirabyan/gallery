import { TestBed } from '@angular/core/testing';
import { FAVORITES_KEY } from '../../constants';
import { StorageService } from '@core/services';

describe('StorageService', () => {
  let service: StorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StorageService]
    });
    service = TestBed.inject(StorageService);
    localStorage.removeItem(FAVORITES_KEY);
  });

  afterEach(() => {
    localStorage.removeItem(FAVORITES_KEY);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve an empty array when there are no stored images', () => {
    const result = service.storageImages;
    expect(result).toEqual([]);
  });

  it('should store and retrieve an array of image IDs', () => {
    const images = ['1', '2', '3'];
    service.storageImages = images;
    const result = service.storageImages;
    expect(result).toEqual(images);
  });
});
