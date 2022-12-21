import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import {InputDataComponent} from './input-data.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    InputDataComponent,
],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [InputDataComponent]
})
export class InputDataModule {}
