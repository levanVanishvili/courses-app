import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTogglePassword]'
})
export class TogglePasswordDirective {
  
  private _shown = false;

  constructor(private el: ElementRef) {
    const parent = this.el.nativeElement.parentNode;
    const span = document.createElement('span');
    span.innerHTML = '<fa-icon [icon]="faEyeSlash"></fa-icon>';
    span.addEventListener('click', () => {
      this.toggle(span);
    });
    parent.appendChild(span);
  }

  toggle(span: HTMLElement) {
    this._shown = !this._shown;
    console.log(span, this._shown)
    if (this._shown) {
      this.el.nativeElement.setAttribute('type', 'text');
      span.innerHTML = '<fa-icon [icon]="faEyeSlash"></fa-icon>';
    } else {
      this.el.nativeElement.setAttribute('type', 'password');
      span.innerHTML = '<fa-icon [icon]="faEye"></fa-icon>';
    }
  }
}
