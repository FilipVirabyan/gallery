import {Component} from '@angular/core';
import {TestBed, ComponentFixture, tick, fakeAsync} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {InfiniteScrollDirective} from '@shared/directives';

@Component({
  template: `
    <div style="height: 200px; overflow: auto" appInfiniteScroll (scrollEnd)="onScrollEnd()">
      <div style="height: 1000px"></div>
    </div>
  `
})
class TestComponent {
  onScrollEnd() {
  }
}

describe('InfiniteScrollDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfiniteScrollDirective, TestComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should emit scrollEnd event when scrolled to bottom', fakeAsync(() => {
    const syp = spyOn(component, "onScrollEnd")
    const directiveEl = fixture.debugElement.query(By.directive(InfiniteScrollDirective)).nativeElement;
    const scrollHeight = directiveEl.scrollHeight;
    const clientHeight = directiveEl.clientHeight;

    // Scroll to the bottom
    directiveEl.scrollTop = scrollHeight - clientHeight;
    directiveEl.dispatchEvent(new Event('scroll'));
    tick(500)
    fixture.detectChanges();
    expect(syp).toHaveBeenCalled();
  }));
});
