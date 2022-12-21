import { Injectable, OnDestroy } from '@angular/core';
import { ReplaySubject } from 'rxjs/index';

@Injectable()
export class Watcher implements OnDestroy {
  protected unsubscribe = new ReplaySubject(1);

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
