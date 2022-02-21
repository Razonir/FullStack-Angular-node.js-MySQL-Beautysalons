import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { BodyComponent } from './layout/body/body.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './screens/home/home.component';
import { LoginComponent } from './screens/LoginFolder/login/login.component';
import { RegisterComponent } from './screens/LoginFolder/register/register.component';
import { BusinessregisterComponent } from './screens/LoginFolder/businessregister/businessregister.component';
import { BusinessloginComponent } from './screens/LoginFolder/businesslogin/businesslogin.component';
import { BusinessPageComponent } from './screens/business-page/business-page.component';
import { BackComponent } from './layout/back/back.component';
import { BusinessComponent } from './screens/business/business.component';
import { HomecontentComponent } from './screens/homecontent/homecontent.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    BusinessregisterComponent,
    BusinessloginComponent,
    BusinessPageComponent,
    BackComponent,
    BusinessComponent,
    HomecontentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
