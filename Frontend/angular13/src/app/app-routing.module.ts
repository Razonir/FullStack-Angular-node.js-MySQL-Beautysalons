import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component'
import { CryptoComponent } from './screens/crypto/crypto.component'

const routes: Routes = [{path: 'HomeComponent', component: HomeComponent},
{path: 'CryptoComponent', component: CryptoComponent},
{path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
