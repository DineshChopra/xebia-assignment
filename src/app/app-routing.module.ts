import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PlanetComponent } from './planet/planet.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'planet', component: PlanetComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
