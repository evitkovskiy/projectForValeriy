import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import {ActionButtonComponent} from './action-button.component';

// Directives
import { ButtonColorDirective } from '../../directives/button-color.directive';

@NgModule({
  declarations: [
    ActionButtonComponent,
    ButtonColorDirective
],
  imports: [
    CommonModule,
  ],
  exports: [ActionButtonComponent]
})
export class ActionButtonModule {}
