import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from 'src/shared/shared.module';
import { EmailDirective } from 'src/shared/directives/english-only.directive';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    AuthRoutingModule,
    SharedModule,
    EmailDirective
  ]
})
export class AuthModule { }
