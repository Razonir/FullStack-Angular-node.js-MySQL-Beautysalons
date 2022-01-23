import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component'
import { CryptoComponent } from './screens/crypto/crypto.component'
import { LoginComponent } from './screens/LoginFolder/login/login.component'
import { RegisterComponent } from './screens/LoginFolder/register/register.component'

const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'CryptoComponent', component: CryptoComponent},
{path: 'login', component: LoginComponent},
{path: 'register', component: RegisterComponent},
{path: '**', redirectTo: ""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
