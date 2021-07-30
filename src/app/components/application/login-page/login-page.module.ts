import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page.component';
import { ButtonModule } from '../../foundational/button/button.module';



@NgModule({
  declarations: [
    LoginPageComponent
  ],
  exports: [
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    ButtonModule
  ]
})
export class LoginPageModule { }
