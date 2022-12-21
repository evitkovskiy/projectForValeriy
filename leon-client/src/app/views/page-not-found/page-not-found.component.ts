import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';
import { IActionButton } from 'src/app/interfaces';

@Component({
  selector: 'leon-page-not-found-component',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageNotFoundComponent {

  @Input() actionConfig!: IActionButton;

  @Output() buttonAction = new EventEmitter();

}
