import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
    selector: '[refDirective]'
})
export class RefDirective {
    constructor(public containerRef: ViewContainerRef) {}
}