import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { PageNotFoundContainer } from './views/page-not-found/page-not-found.container';

export const routes: Routes = [
  {
    path: 'data',
    loadChildren: () => import('./views/data-table-view/data-table-view.module').then((m) => m.DataTableViewModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/data'
  },
  {
    path: '**',
    component: PageNotFoundContainer
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
