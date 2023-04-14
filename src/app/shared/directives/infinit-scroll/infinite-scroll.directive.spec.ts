import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { InfiniteScrollDirective } from './infinite-scroll.directive';
import { Subject } from 'rxjs';

@Component({
  template: '<div style="height: 500px;" appInfiniteScroll (scrollEnd)="onScrollEnd()"></div>',
})
class TestComponent {
  onScrollEnd() {}
}

describe('InfiniteScrollDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;
  let directive: InfiniteScrollDirective;
  let element: DebugElement;
  let scrollEndSpy: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestComponent, InfiniteScrollDirective],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement.query(By.directive(InfiniteScrollDirective));
    directive = element.injector.get(InfiniteScrollDirective);
    scrollEndSpy = spyOn(component, 'onScrollEnd');
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  afterEach(() => {
    // Clean up
    fixture.destroy();
  });
});
