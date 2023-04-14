import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appAddHeartIcon]'
})
export class AddHeartIconDirective {

  @Input('appAddHeartIcon') set heartIcon(show: boolean) {
    this.addIcon(show);
  };

  constructor(private el: ElementRef) {
  }

  addIcon(canShow: boolean) {
    if (canShow) {
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

}
