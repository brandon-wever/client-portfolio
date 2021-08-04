import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page.component';
import { ButtonModule } from '../../foundational/button/button.module';
import { FormFieldModule } from '../../foundational/form-field/form-field.module';



@NgModule({
  declarations: [
    LoginPageComponent
  ],
  exports: [
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    FormFieldModule
  ]
})
export class LoginPageModule { }
