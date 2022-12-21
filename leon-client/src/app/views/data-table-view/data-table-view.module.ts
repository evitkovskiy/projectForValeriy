import { NgModule, ɵgetDirectives } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableViewComponent } from './data-table-view.component';
import { DataTableModule } from 'src/app/components/data-table/data-table.module';
import { DataTableViewContainer } from './data-table-view.container';
import { RouterModule, Routes } from '@angular/router';
import { ActionButtonModule } from 'src/app/shared/components/action-button/action-button.module';
import { PaginatorModule } from '../../shared/components/paginator/paginator.module';
import { DirectivesModule } from 'src/app/shared/directives/directives.module';
import { DataTableService } from 'src/app/core/services/data-table.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpRequestInterceptor } from 'src/app/core/interceptors/http-request.interceptor';
import { PreloaderService } from 'src/app/shared/services/preloader.service';

// Components

export const routes: Routes = [
    {
      path: '',
      canActivate: [],
      component: DataTableViewContainer,
      pathMatch: 'full',
    },
  ];

@NgModule({
  declarations: [
    DataTableViewComponent, 
    DataTableViewContainer,
],
  imports: [
    CommonModule,
    DataTableModule,
    RouterModule.forChild(routes),
    ActionButtonModule,
    PaginatorModule,
    DirectivesModule,
    HttpClientModule
  ],
  providers: [
    PreloaderService,
    DataTableService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptor,
      multi: true,
    }]
})
export class DataTableViewModule {}
