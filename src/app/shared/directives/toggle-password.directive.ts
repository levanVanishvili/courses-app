import { Directive, ElementRef, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common'; 

@Directive({
  selector: '[appTogglePassword]'
})
export class TogglePasswordDirective {
  private _shown = false;

  constructor(private el: ElementRef) {
    const parent = this.el.nativeElement.parentNode;
    const span = document.createElement('i');
    span.setAttribute('class','bi bi-eye-slash-fill')
    span?.addEventListener('click', () => {
      this.toggle(span);
    });
    parent.appendChild(span);
  }

  toggle(span: HTMLElement) {
    this._shown = !this._shown;
    if (this._shown) {
      this.el.nativeElement.setAttribute('type', 'text');
      span.setAttribute('class','bi bi-eye-fill');
    } else {
      this.el.nativeElement.setAttribute('type', 'password');
      span.setAttribute('class','bi bi-eye-slash-fill')
    }
}}
