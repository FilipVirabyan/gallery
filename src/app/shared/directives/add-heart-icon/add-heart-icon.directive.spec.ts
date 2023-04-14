import { Component, DebugElement } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AddHeartIconDirective } from '@shared/directives';

@Component({
  template: `<div appAddHeartIcon [appAddHeartIcon]="showIcon">
    <figure>
      <img src="test" alt="test">
    </figure>
  </div>`

})
class TestComponent {
  showIcon = false;
}

describe('AddHeartIconDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let divEl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddHeartIconDirective, TestComponent]
    });
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    divEl = fixture.debugElement.query(By.directive(AddHeartIconDirective));
  });

  it('should not add icon when showIcon is false', () => {
    fixture.detectChanges();
    expect(divEl.nativeElement.querySelector('.heart-icon')).toBeNull();
  });

  it('should add icon when showIcon is true', () => {
    component.showIcon = true;
    fixture.detectChanges();
    const iconEl = divEl.nativeElement.querySelector('.heart-icon');
    expect(iconEl).not.toBeNull();
    expect(iconEl.textContent).toBe('favorite');
  });

});
