// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


// Forms Component
import { FormsComponent } from './forms.component';


import { TooltipModule } from 'ngx-bootstrap/tooltip';


// Components Routing
import { CreateRoutingModule } from './create-routing.module';
import { UserServices } from './services/user-services';
import { TablesComponent } from './tables.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CreateRoutingModule,
    TooltipModule.forRoot()
  ],
  declarations: [
    FormsComponent,
    TablesComponent
  ],
  providers: [
    UserServices
  ]
})
export class CreateModule { }
