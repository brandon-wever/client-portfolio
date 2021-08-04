import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from './components/foundational/button/button.module';
import { LoginPageModule } from './components/application/login-page/login-page.module';
import { FormFieldComponent } from './components/foundational/form-field/form-field.component';

@NgModule({
  declarations: [
    AppComponent,
    FormFieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    LoginPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
