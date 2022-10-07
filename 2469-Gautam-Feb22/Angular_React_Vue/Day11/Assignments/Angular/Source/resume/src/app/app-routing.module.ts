import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"", redirectTo:"/home", pathMatch:'full'},
  {path:"home",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"education",component:EducationComponent},
  {path:"experience",component:ExperienceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
