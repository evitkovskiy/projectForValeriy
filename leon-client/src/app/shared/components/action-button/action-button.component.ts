import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

// Interfaces
import { IActionButton } from '../../../interfaces';

@Component({
  selector: 'leon-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActionButtonComponent {

  @Input() actionConfig!: IActionButton;
  @Input() disabled!: boolean;

  @Output() buttonAction = new EventEmitter();

}
