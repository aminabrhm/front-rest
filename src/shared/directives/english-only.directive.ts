import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: 'input[email]',
  standalone: true
})
export class EmailDirective {

  constructor() { }
  pattren = /^[a-zA-Z0-9._@]*$/;

  @HostListener('keypress', ['$event']) onKeyPress(event: any) {
    return new RegExp(this.pattren).test(event.key);
  }

  @HostListener('paste', ['$event']) onPaste(event: ClipboardEvent) {
    event.preventDefault();
  }

}
