import { animate, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

// Form
import { dataTableForm } from '../../../entities/forms/data-table.form';
// Global
import { ACTION_CONFIGURE, VIEW_FORM_CONTROLS } from '../../../global';
//Interfaces
import { IActionButton } from '../../../interfaces';
// Helper Functions
import { trackItem } from '../../functions/functions';

@Component({
  selector: 'leon-dialog-modal',
  templateUrl: './dialog-modal.component.html',
  styleUrls: ['./dialog-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('dialog-modal', [
      transition(':enter', [
        style({
          opacity: 0,
        }),
        animate('200ms ease-out')
      ]),
      transition(':leave', [
        style({'opacity': 1}),
        animate(200, style({
          opacity: 0,
          transform: 'scale(1.2)'
        }))
      ])
    ])
  ],
  host: { '[@dialog-modal]': 'in' }
})
export class DialogModalComponent {  

  trackItem = trackItem;
  actionsConfig = ACTION_CONFIGURE;
  viewFormControls = VIEW_FORM_CONTROLS;
  title = 'Default title';
  currentActionButton!: IActionButton;
  personForm!: FormGroup;
  
  @Output() close = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.personForm = this.fb.group(new dataTableForm);
  }

  get controls() {
    return this.personForm.controls as any; // Write Interface
  }

  buttonAction(actionConfig: IActionButton): void {
    this.close.emit(actionConfig.action === 'Accept' ? true : false);
  }

}
