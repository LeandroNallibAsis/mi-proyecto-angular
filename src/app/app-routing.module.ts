import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { EjemploComponent } from './ejemplo/ejemplo.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'ejemplo', component: EjemploComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }