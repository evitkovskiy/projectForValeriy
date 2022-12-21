import { ComponentFactoryResolver, Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
// Classes
import { Watcher } from '../../classes/watcher';
// Interfaces
import { IActionButton } from 'src/app/interfaces';
// Components
import { DialogModalComponent } from '../components/dialog-modal/dialog-modal.component';
// Directives
import { RefDirective } from '../directives/ref.directive';

@Injectable({
  providedIn: 'root'
})
export class DialogModalService extends Watcher implements OnDestroy{

  modalAfterClosed = new Subject();

  constructor(
    private cFResolver: ComponentFactoryResolver) {
      super();
   }

  showModal(refDir: RefDirective, actionConfig: IActionButton) {
    const modalFactory = this.cFResolver.resolveComponentFactory(DialogModalComponent);
    refDir.containerRef.clear();
    const component = refDir?.containerRef.createComponent(modalFactory);
    component.instance.title = actionConfig.message;
    component.instance.currentActionButton = actionConfig;
    component.instance.close
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((value: boolean) => {
        this.modalAfterClosed.next(
          {
            dialogStatus: value, 
            modalFormValue: component.instance.personForm.getRawValue()
          }
        );
        refDir.containerRef.clear();
      });
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }
}
