import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AircraftsComponent } from './components/aircrafts/aircrafts.component';
import { AircraftsAlertComponent } from './components/aircrafts/aircrafts-alert/aircrafts-alert.component';
import { AuthComponent } from './components/auth/auth.component';


const routes: Routes = [
  {path: 'aircrafts', component: AircraftsComponent},
  {path: 'aircrafts-alert', component: AircraftsAlertComponent},
  {path: 'auth', component: AuthComponent},
  {path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
