import {Directive, EventEmitter, HostListener, Output} from '@angular/core';

@Directive({
  selector: '[appInfiniteScroll]'
})
export class InfiniteScrollDirective {
  @Output() scrollEnd = new EventEmitter<void>();

  private isScrolling = false;

  constructor() {
  }

  @HostListener('scroll', ['$event.target'])
  onScroll(target: HTMLElement) {
    if (!this.isScrolling) {
      this.isScrolling = true;
      setTimeout(() => {
        this.isScrolling = false;
        this._emitScroll(target)
      }, 500);
    }
  }

  private _emitScroll(target: HTMLElement) {
    const windowHeight = window.innerHeight;
    const scrollTop = target.scrollTop || 0;
    const scrollHeight = target.scrollHeight;
    if (scrollTop + windowHeight >= scrollHeight - 100) {
      this.scrollEnd.emit();
    }
  }
}
