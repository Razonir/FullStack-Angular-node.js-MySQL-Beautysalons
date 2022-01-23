import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { BodyComponent } from './layout/body/body.component';
import { FooterComponent } from './layout/footer/footer.component';
import { CryptoComponent } from './screens/crypto/crypto.component';
import { HomeComponent } from './screens/home/home.component';
import { LoginComponent } from './screens/LoginFolder/login/login.component';
import { RegisterComponent } from './screens/LoginFolder/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    CryptoComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
