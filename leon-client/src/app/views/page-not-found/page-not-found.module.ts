import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Modules
import { ActionButtonModule } from 'src/app/shared/components/action-button/action-button.module';

// Components
import { PageNotFoundComponent } from './page-not-found.component';
import { PageNotFoundContainer } from './page-not-found.container';

@NgModule({
  declarations: [
    PageNotFoundComponent,
    PageNotFoundContainer
],
  imports: [
    CommonModule,
    RouterModule,
    ActionButtonModule,
  ],
  exports: [PageNotFoundContainer, PageNotFoundComponent]
})
export class PageNotFoundModule {}
