import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { Run5kComponent } from './components/signup/run5k/run5k.component';
import { Run10kComponent } from './components/signup/run10k/run10k.component';
import { Run21kComponent } from './components/signup/run21k/run21k.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { VirtualRaceComponent } from './components/virtual-race/virtual-race.component';
const routes: Routes = [
  {path: 'inicio', component: VirtualRaceComponent},
  {path: 'patrocinadores', component: HomeComponent},
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path: 'registro', component: RegistrationComponent},
  { path: 'acerca-de-la-carrera', component: SignupComponent,
  },
  { path: 'acerca-de-la-carrera', component: SignupComponent,
    children: [
      { path: '5-kilometros', component: Run5kComponent },
      { path: '10-kilometros', component: Run10kComponent},
      { path: '21-kilometros', component: Run21kComponent}
    ]
  },
  {path: '**', redirectTo: 'inicio', pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
