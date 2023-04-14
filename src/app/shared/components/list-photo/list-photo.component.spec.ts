import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPhotoComponent } from './list-photo.component';

describe('ListPhotoComponent', () => {
  let component: ListPhotoComponent;
  let fixture: ComponentFixture<ListPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ListPhotoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
