import {Directive, ElementRef, EventEmitter, HostListener, OnDestroy, OnInit, Output} from '@angular/core';
import {debounceTime, filter, fromEvent, Subject, takeUntil} from "rxjs";

@Directive({
  selector: '[appInfiniteScroll]'
})
export class InfiniteScrollDirective implements OnInit, OnDestroy {

  @Output() scrollEnd = new EventEmitter<void>();
  private _subscription$ = new Subject<void>();

  constructor(private _elementRef: ElementRef<HTMLElement>) {
  }

  ngOnInit() {
    this._debounceListener()
  }

  /**
   * Subscribes to the `_scrollEnd$` Observable and applies the `debounceTime()` and `takeUntil()` operators
   * to debounce the event and unsubscribe when the component is destroyed.
   * Emits a `scrollEnd` event through the `scrollEnd` EventEmitter when the debounced event is emitted.
   *
   * @returns Nothing.
   */
  private _debounceListener() {
    fromEvent(this._elementRef.nativeElement, 'scroll')
      .pipe(
        debounceTime(500),
        filter(() => {
          const windowHeight = window.innerHeight;
          const scrollTop = this._elementRef.nativeElement.scrollTop || 0;
          const scrollHeight = document.documentElement.scrollHeight;
          return scrollTop + windowHeight >= scrollHeight - 100
        }),
        takeUntil(this._subscription$)
      ).subscribe(() => {
      this.scrollEnd.emit();
    });
  }

  ngOnDestroy() {
    this._subscription$.next();
    this._subscription$.complete();
  }

}
