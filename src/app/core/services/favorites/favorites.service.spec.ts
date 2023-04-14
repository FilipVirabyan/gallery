import {TestBed} from '@angular/core/testing';
import {FavoritesService} from '@core/services';
import {StorageService} from '@core/services';

describe('FavoritesService', () => {
  let favoritesService: FavoritesService;
  let storageServiceSpy: jasmine.SpyObj<StorageService>;
  let storage: string [] = []

  beforeEach(() => {
    storageServiceSpy = jasmine.createSpyObj('StorageService', ['dummyMethod']);

    Object.defineProperty(storageServiceSpy, 'storageImages', {
      get: () => storage,
      set: (item) => {
        storage = item
      }
    });

    TestBed.configureTestingModule({
      providers: [FavoritesService, {provide: StorageService, useValue: storageServiceSpy}]
    });
    storageServiceSpy.storageImages = ['1', '2'];
    favoritesService = TestBed.inject(FavoritesService);
  });

  it('should be created', () => {
    expect(favoritesService).toBeTruthy();
  });

  describe('addImage', () => {
    it('should add an image to favorites', () => {
      const imageId = '4';

      favoritesService.addImage(imageId);
      expect(favoritesService.favorites).toEqual(['1', '2', imageId]);
    });

    it('should not add duplicate image to favorites', () => {
      const imageId = '1';

      favoritesService.addImage(imageId);
      expect(favoritesService.favorites).toEqual(['1', '2']);
    });
  });

  describe('removeImage', () => {
    it('should remove an image from favorites', () => {
      const imageId = '1';
      favoritesService.removeImage(imageId);
      expect(favoritesService.favorites).toEqual(['2']);
    });

    it('should not remove a non-existent image from favorites', () => {
      const imageId = '3';
      favoritesService.removeImage(imageId);
      expect(favoritesService.favorites).toEqual(['1', '2']);
    });
  });
});
