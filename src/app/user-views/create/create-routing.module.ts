import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsComponent } from './forms.component';
import { TablesComponent } from './tables.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'create'
      },
      {
        path: 'create',
        component: FormsComponent,
        data: {
          title: 'Forms'
        }
      },
      {
        path: 'existing',
        component: TablesComponent,
        data: {
          title: 'Forms'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateRoutingModule {}
