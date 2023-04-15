import {TestBed, ComponentFixture, tick, fakeAsync} from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { InfiniteScrollDirective } from '@shared/directives';

@Component({
  template: `
    <div style="height: 500px; overflow-y: scroll;" appInfiniteScroll (scrollEnd)="onScrollEnd()"></div>
  `
})
class TestComponent {
  public onScrollEnd() {}
}

describe('InfiniteScrollDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;
  let directiveEl: DebugElement;
  let directiveInstance: InfiniteScrollDirective;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, InfiniteScrollDirective]
    });

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    directiveEl = fixture.debugElement.query(By.directive(InfiniteScrollDirective));
    directiveInstance = directiveEl.injector.get(InfiniteScrollDirective);
  });

  it('should create', () => {
    expect(directiveInstance).toBeTruthy();
  });

  it('should emit scrollEnd event when user has scrolled to the bottom of scrollable element', fakeAsync(() => {
    const spy = spyOn(component, 'onScrollEnd');
    const scrollableEl = directiveEl.nativeElement;

    scrollableEl.scrollTop = scrollableEl.scrollHeight - scrollableEl.clientHeight + 1;
    scrollableEl.dispatchEvent(new Event('scroll'));
    tick(500)
    expect(spy).toHaveBeenCalledTimes(1);
  }));

  it('should unsubscribe from interval when directive is destroyed', () => {
    const spy = spyOn(directiveInstance['_destroy$'], 'next');
    fixture.destroy();
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
