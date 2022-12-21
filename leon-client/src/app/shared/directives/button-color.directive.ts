import { Directive, ElementRef, Input } from "@angular/core";
// Interfaces
import { IActionButtonStyles } from "../../interfaces";

@Directive({
    selector: '[buttonColor]',
  })
  export class ButtonColorDirective {
    @Input() set backgroundColor(styles: IActionButtonStyles) {
        this.el.nativeElement.style.backgroundColor = styles.backgroundColor;
    }

    constructor(private el: ElementRef) {}
  }