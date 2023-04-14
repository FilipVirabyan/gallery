import {Directive, ElementRef, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appAddHeartIcon]'
})
export class AddHeartIconDirective {

  @Input('appAddHeartIcon') set heartIcon(show: boolean) {
    if (!show) {
      return
    }
    this.addIcon();
  };

  constructor(private _el: ElementRef, private _renderer: Renderer2) {}

  addIcon() {
    const iconElement = this._renderer.createElement('span');
    this._renderer.setStyle(this._el.nativeElement.firstChild, 'position', 'relative');
    this._renderer.addClass(iconElement, 'material-icons');
    this._renderer.addClass(iconElement, 'heart-icon');
    const text = this._renderer.createText('favorite');
    this._renderer.appendChild(iconElement, text);
    this._renderer.setStyle(iconElement, 'z-index', '1');
    this._renderer.setStyle(iconElement, 'top', '0');
    this._renderer.setStyle(iconElement, 'right', '0');
    this._renderer.setStyle(iconElement, 'transform', 'translate(-50%, 100%)');
    this._renderer.setStyle(iconElement, 'position', 'absolute');
    this._renderer.appendChild(this._el.nativeElement.firstChild, iconElement);
  }

}
