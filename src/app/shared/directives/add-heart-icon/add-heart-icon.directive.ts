import {Directive, ElementRef, Input} from '@angular/core';

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

  constructor(private el: ElementRef) {
  }

  addIcon() {
    const iconElement = document.createElement('span');
    this.el.nativeElement.firstChild.style.position = 'relative';
    iconElement.classList.add('material-icons', 'heart-icon');
    iconElement.textContent = 'favorite';
    iconElement.style.zIndex = '1';
    iconElement.style.top = '0';
    iconElement.style.right = '0';
    iconElement.style.transform = 'translate(-50%, 100%)'
    iconElement.style.position = 'absolute';
    this.el.nativeElement.firstChild.appendChild(iconElement)
  }

}
