import { ComponentFactoryResolver, Injectable, OnDestroy } from '@angular/core';
import { takeUntil } from 'rxjs/operators';

// Classes
import { Watcher } from 'src/app/classes/watcher';
// Components
import { MessageComponent } from '../components/message/message.component';
// Directives
import { RefDirective } from '../directives/ref.directive';

@Injectable({
    providedIn: 'root'
})
export class MessageService extends Watcher implements OnDestroy {

  constructor(
    private cFResolver: ComponentFactoryResolver) {
        super();
    }

  show(refDir: RefDirective, message: string, type: string) {
    console.log(message);
    const modalFactory = this.cFResolver.resolveComponentFactory(MessageComponent);
    const component = refDir?.containerRef.createComponent(modalFactory);
    component.instance.message = message;
    component.instance.close
        .pipe(takeUntil(this.unsubscribe))
        .subscribe((value: boolean) => {
            if (value) {
                refDir.containerRef.clear();
            }
        })
  }

  ngOnDestroy(): void {
      super.ngOnDestroy();
  }
}
