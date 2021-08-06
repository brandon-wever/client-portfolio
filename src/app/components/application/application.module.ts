import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationRoutingModule } from './application-routing.module';
import { NavigationModule } from './navigation/navigation.module';
import { LoginPageModule } from './login-page/login-page.module';
import { HomePageModule } from './home-page/home-page.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ApplicationRoutingModule,
    NavigationModule,
    LoginPageModule,
    HomePageModule
  ]
})
export class ApplicationModule { }
