import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

// Interfaces
import { IActionButtons, IRequestPersons } from '../../interfaces';

@Component({
  selector: 'leon-data-table-view-component',
  templateUrl: './data-table-view.component.html',
  styleUrls: ['./data-table-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataTableViewComponent {

  @Input() requestData!: IRequestPersons;
  @Input() actionsConfig!: IActionButtons;

  @Output() loadNewPage = new EventEmitter();
  @Output() actionPerson = new EventEmitter();

}
