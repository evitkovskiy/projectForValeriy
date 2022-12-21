import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { PaginatorComponent } from './paginator.component';

@NgModule({
  declarations: [PaginatorComponent],
  imports: [
    CommonModule,
  ],
  exports: [PaginatorComponent]
})
export class PaginatorModule {}
