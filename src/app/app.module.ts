import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from './components/foundational/button/button.module';
import { LoginPageModule } from './components/application/login-page/login-page.module';
import { HomePageModule } from './components/application/home-page/home-page.module';
import { AuthenticationService } from './services/authentication.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    LoginPageModule,
    HomePageModule,
    HttpClientModule
  ],
  providers: [ AuthenticationService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
