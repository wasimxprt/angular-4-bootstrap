import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  imports: [
    LoginRoutingModule,
    ChartsModule,
    BsDropdownModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ LoginComponent ]
})
export class LoginModule { }
