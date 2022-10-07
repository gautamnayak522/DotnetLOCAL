import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndiaUSAComponent } from './india-usa/india-usa.component';
import { PacificComponent } from './pacific/pacific.component';
import { AtlanticComponent } from './atlantic/atlantic.component';
import { MealComponent } from './meal/meal.component';

const routes: Routes = [
  {path: '', redirectTo: 'india-usa', pathMatch: 'full'},
  {path: 'india-usa', component: IndiaUSAComponent, children: [
    {path: 'atlantic', component: AtlanticComponent},
    {path: 'atlantic/:id', component: MealComponent},
    {path: 'pacific', component: PacificComponent},
    {path: 'pacific/:id', component: MealComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
