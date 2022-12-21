import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Modules
import { ActionButtonModule } from '../action-button/action-button.module';
import { InputDataModule } from '../input-data/input-data-module';

// Components
import {DialogModalComponent} from './dialog-modal.component';

// Directives
import { DialogModalDirective } from '../../directives/dialog-modal.directive';

@NgModule({
  declarations: [DialogModalComponent, DialogModalDirective],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ActionButtonModule,
    InputDataModule,
  ],
  exports: [DialogModalComponent],
  entryComponents: [DialogModalComponent]
})
export class dialogModalModule {}
