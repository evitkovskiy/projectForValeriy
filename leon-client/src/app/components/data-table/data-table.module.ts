import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Components
import { DataTableComponent } from './data-table.component';
// Modules
import { ActionButtonModule } from 'src/app/shared/components/action-button/action-button.module';
import { dialogModalModule } from 'src/app/shared/components/dialog-modal/dialog-modal.module';
import { InputDataModule } from 'src/app/shared/components/input-data/input-data-module';
import { DirectivesModule } from 'src/app/shared/directives/directives.module';

@NgModule({
  declarations: [
    DataTableComponent,
],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ActionButtonModule,
    dialogModalModule,
    InputDataModule,
    DirectivesModule,
  ],
  exports: [DataTableComponent],
})
export class DataTableModule {}
