import { Directive, HostListener, EventEmitter, Output } from '@angular/core';

@Directive(
  { 
    selector: '[escapeDown]' 
  }
)
export class DialogModalDirective {
    @Output() escape = new EventEmitter();

    @HostListener('document:keydown.escape', [ '$event' ]) onKeydownHandler(event: KeyboardEvent) {
        this.escape.emit(event.key);
    }
}