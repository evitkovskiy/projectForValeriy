import { ComponentFactoryResolver, Injectable } from '@angular/core';

// Components
import { PreloaderComponent } from '../components/preloader/preloader.component';
// Directives
import { RefDirective } from '../directives/ref.directive';

@Injectable()
export class PreloaderService {

  constructor(
    private cFResolver: ComponentFactoryResolver) {}

  show(refDir: RefDirective) {
    const modalFactory = this.cFResolver.resolveComponentFactory(PreloaderComponent);
    refDir?.containerRef.createComponent(modalFactory);
  }

  hide(refDir: RefDirective) {
    refDir.containerRef.clear();
  }
}
