import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {ActivatedRoute} from '@angular/router';
import {of} from 'rxjs';
import {IPhoto} from '@core/models';
import {BaseApiService} from '@core/api-services';
import {FavoritesService} from '@core/services';
import {PhotoDetailComponent} from "@views/photo-gallery/pages/photo-detail/photo-detail.component";
import {By} from "@angular/platform-browser";


describe('PhotoDetailsComponent', () => {
  let component: PhotoDetailComponent;
  let fixture: ComponentFixture<PhotoDetailComponent>;

  const activatedRouteMock = {
    snapshot: {
      paramMap: {
        get: () => '1'
      }
    }
  };

  const baseApiServiceMock = {
    photoApiService: {
      getImageById: () => of({
        id: '1',
        download_url: 'https://example.com/image.jpg'
      } as IPhoto)
    }
  };

  const favoritesServiceMock = {
    removeImage:  jasmine.createSpy(),
    favoritesSet: new Set(['1'])
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotoDetailComponent],
      providers: [
        {provide: ActivatedRoute, useValue: activatedRouteMock},
        {provide: BaseApiService, useValue: baseApiServiceMock},
        {provide: FavoritesService, useValue: favoritesServiceMock}
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the image', () => {
    const imgElement = fixture.nativeElement.querySelector('img');
    expect(imgElement).toBeTruthy();
    expect(imgElement.src).toBe('https://example.com/image.jpg');
    expect(imgElement.alt).toBe('1');
  });

  it('should remove the image from favorites', () => {
    const buttonElement = fixture.nativeElement.querySelector('button');
    expect(buttonElement).toBeTruthy();
    expect(buttonElement.disabled).toBe(false);
    buttonElement.click();
    expect(favoritesServiceMock.removeImage).toHaveBeenCalledWith('1');
  });

  it('should disable the button if the photo is not in favorites', fakeAsync(() => {
    const favoritesService = TestBed.inject(FavoritesService);
    spyOn(favoritesService.favoritesSet, 'has').and.returnValue(false);

    const fixture = TestBed.createComponent(PhotoDetailComponent);
    fixture.detectChanges();
    tick();

    const button = fixture.debugElement.query(By.css('button'));
    expect(button.nativeElement.disabled).toBeTruthy();
  }));
});
