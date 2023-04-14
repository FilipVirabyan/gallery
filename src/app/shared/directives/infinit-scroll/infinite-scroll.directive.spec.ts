import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {Component, DebugElement, ElementRef} from '@angular/core';
import {By} from '@angular/platform-browser';

import {InfiniteScrollDirective} from '@shared/directives';

@Component({
  template: `
    <div style="height: 200px; overflow-y: scroll;" appInfiniteScroll (scrollEnd)="onScrollEnd()"></div>
  `
})
class TestComponent {
  onScrollEnd() {
  }
}

describe('InfiniteScrollDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let debugElement: DebugElement;
  let directive: InfiniteScrollDirective;
  let elementRef: ElementRef<HTMLElement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        InfiniteScrollDirective
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement.query(By.directive(InfiniteScrollDirective));
    directive = debugElement.injector.get(InfiniteScrollDirective);
    elementRef = debugElement.injector.get(ElementRef);
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  // it('should emit scrollEnd event when scrolled to the bottom', fakeAsync(() => {
  //   const spy = spyOn(component, 'onScrollEnd');
  //   const windowHeight = window.innerHeight;
  //   const scrollHeight = document.documentElement.scrollHeight;
  //
  //   elementRef.nativeElement.scrollTop = scrollHeight - windowHeight - 100;
  //   debugElement.triggerEventHandler('scroll', null);
  //   fixture.detectChanges();
  //   tick(100);
  //   expect(spy).toHaveBeenCalled();
  // }));

  it('should not emit scrollEnd event when not scrolled to the bottom', () => {
    const spy = spyOn(component, 'onScrollEnd');
    const windowHeight = window.innerHeight;
    const scrollHeight = document.documentElement.scrollHeight;
    elementRef.nativeElement.scrollTop = scrollHeight - windowHeight - 200;
    debugElement.triggerEventHandler('scroll', null);
    fixture.detectChanges();
    expect(spy).not.toHaveBeenCalled();
  });

  afterEach(() => {
    fixture.destroy();
  });
});
