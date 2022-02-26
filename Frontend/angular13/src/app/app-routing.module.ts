import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component'
import { LoginComponent } from './screens/LoginFolder/login/login.component'
import { RegisterComponent } from './screens/LoginFolder/register/register.component'
import { BusinessregisterComponent } from './screens/LoginFolder/businessregister/businessregister.component';
import { BusinessPageComponent } from './screens/business-page/business-page.component';
import { BusinessComponent } from './screens/business/business.component';
import { BackComponent } from './layout/back/back.component';
import { AuthGuard } from './guards/auth.guard';
import { BusinessinterfaceComponent } from './screens/businessinterface/businessinterface.component';

const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'admin', component: BackComponent ,canActivate: [AuthGuard]},
{path: 'login', component: LoginComponent},
{path: 'register', component: RegisterComponent},
{path: 'registerbusiness', component: BusinessregisterComponent},
{path: 'business', component: BusinessComponent},
{path: 'businessinterface', component: BusinessinterfaceComponent},
{
  path: 'businesspage',
  children: [
    {
      path: '',
      component: BusinessPageComponent
    },
    {
      path: ':bid',
      component: BusinessPageComponent
    }
  ] 
},
{path: '**', redirectTo: ""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
