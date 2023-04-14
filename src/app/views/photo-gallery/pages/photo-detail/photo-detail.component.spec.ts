import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { IPhoto } from '@core/models';
import { BaseApiService } from '@core/api-services/base-api/base-api.service';
import { PhotoDetailComponent } from './photo-detail.component';
import {FavoritesService} from "@core/services";
import {CommonModule} from "@angular/common";

describe('PhotoDetailComponent', () => {
  let component: PhotoDetailComponent;
  let baseApiService: BaseApiService;
  let favoritesService: FavoritesService;
  let route: ActivatedRoute;
  let fixture: ComponentFixture<PhotoDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhotoDetailComponent],
      imports: [CommonModule],
      providers: [
        PhotoDetailComponent,
        {
          provide: BaseApiService,
          useValue: { photoApiService: { getImageById: () =>of({
                download_url: 'any',
                id: 'te'
              } as IPhoto) } },
        },
        { provide: FavoritesService, useValue: {
            removeImage: () => {},
            favoritesSet: new Set()
          } },
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { paramMap: { get: () => 'id' } } },
        },
      ],
    });
    fixture = TestBed.createComponent(PhotoDetailComponent);
    component = TestBed.inject(PhotoDetailComponent);
    baseApiService = TestBed.inject(BaseApiService);
    favoritesService = TestBed.inject(FavoritesService);
    route = TestBed.inject(ActivatedRoute);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should remove image from favorites when removeFromFavorites is called', () => {
    spyOn(favoritesService, 'removeImage');
    component.removeFromFavorites('123');
    expect(favoritesService.removeImage).toHaveBeenCalledWith('123');
  });

  it('should disable the remove button if the image is not in favorites', waitForAsync(() => {
    component.photoDetails$.subscribe(response => {
      fixture.detectChanges();
      const button = fixture.nativeElement.querySelector('button');
      expect(button?.disabled).toBeTrue();
    })
  }));
});
