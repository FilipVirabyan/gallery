import {Directive, EventEmitter, HostListener, OnDestroy, Output} from '@angular/core';
import {Subject, takeUntil, timer} from "rxjs";

@Directive({
  selector: '[appInfiniteScroll]'
})
export class InfiniteScrollDirective implements OnDestroy {
  @Output() scrollEnd = new EventEmitter<void>();
  private _destroy$ = new Subject<void>();

  private isScrolling = false;

  constructor() {
  }

  @HostListener('scroll', ['$event.target'])
  onScroll(target: HTMLElement) {
    if (!this.isScrolling) {
      this.isScrolling = true;
      timer(500)
        .pipe(
          takeUntil(this._destroy$)
        )
        .subscribe(() => {
          this.isScrolling = false;
          this._emitScroll(target);
        });
    }
  }

  /**
   *  Emits a scrollEnd event through the scrollEnd EventEmitter when the user has scrolled to the bottom of the
   *  scrollable element.
   *
   *  @param target - The HTMLElement that triggered the scroll event.
   *
   *  @returns Nothing.
   */
  private _emitScroll(target: HTMLElement) {
    const windowHeight = window.innerHeight;
    const scrollTop = target.scrollTop || 0;
    const scrollHeight = target.scrollHeight;
    if (scrollTop + windowHeight >= scrollHeight - 100) {
      this.scrollEnd.emit();
    }
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
