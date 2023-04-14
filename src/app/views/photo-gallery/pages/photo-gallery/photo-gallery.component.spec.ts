import {ComponentFixture, TestBed, fakeAsync, tick, flush} from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {of} from 'rxjs';
import {delay} from 'rxjs/operators';
import {IPhoto} from '@core/models';
import {BaseApiService} from '@core/api-services';
import {FavoritesService} from '@core/services';
import {PhotoGalleryComponent} from './photo-gallery.component';
import {ListContainerComponent, ListPhotoComponent, SpinnerComponent} from "@shared/components";

// Mock data
const mockImages: IPhoto[] = [
  {
    id: '1',
  } as IPhoto,
];

class MockBaseApiService {
  photoApiService = {
    getListOfImages: (page: number) => of(mockImages).pipe(delay(100))
  };
}

describe('PhotoGalleryComponent', () => {
  let component: PhotoGalleryComponent;
  let fixture: ComponentFixture<PhotoGalleryComponent>;
  let baseApiService: BaseApiService;
  let favoritesService: FavoritesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotoGalleryComponent],
      imports: [HttpClientTestingModule, SpinnerComponent, ListContainerComponent, ListPhotoComponent],
      providers: [
        FavoritesService,
        {provide: BaseApiService, useClass: MockBaseApiService}
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoGalleryComponent);
    component = fixture.componentInstance;
    baseApiService = TestBed.inject(BaseApiService);
    favoritesService = TestBed.inject(FavoritesService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load images from the API', fakeAsync(() => {
    spyOn(baseApiService.photoApiService, 'getListOfImages').and.callThrough();
    component.ngOnInit();
    tick(100); // Wait for API request to complete
    expect(baseApiService.photoApiService.getListOfImages).toHaveBeenCalledWith(1);
    expect(component.images).toEqual(mockImages);
  }));

  it('should load more images when scrolling down', fakeAsync(() => {
    spyOn(baseApiService.photoApiService, 'getListOfImages').and.callThrough();
    component.ngOnInit();
    tick(500); // Wait for component to update image list
    component.loadMoreImages();
    tick(500); // Wait for component to update image list

    expect(baseApiService.photoApiService.getListOfImages).toHaveBeenCalledWith(2);
    expect(component.images.length).toBe(2);
  }));

  it('should add images to favorites', fakeAsync(() => {
    spyOn(favoritesService, 'addImage');
    component.ngOnInit();
    fixture.detectChanges(); // Update view with initial images
    tick(500)
    fixture.detectChanges(); // Update view with initial images

    const imageEl = fixture.nativeElement.querySelector('app-list-photo');
    imageEl.click();
    expect(favoritesService.addImage).toHaveBeenCalledWith(mockImages[0].id);
  }));
});
