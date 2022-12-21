import { ChangeDetectionStrategy, Component} from '@angular/core';
import { Router } from '@angular/router';

// Global
import { ACTION_CONFIGURE } from '../../global';


@Component({
  selector: 'leon-page-not-found',
  template: `
    <leon-page-not-found-component
        [actionConfig]="actionConfig"
        (buttonAction)="buttonAction()"
    >
    </leon-page-not-found-component>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageNotFoundContainer {

  actionConfig = ACTION_CONFIGURE['goHomeAction'];

  constructor(private router: Router) {}

  buttonAction = () => this.router.navigate(['/data']);

}
