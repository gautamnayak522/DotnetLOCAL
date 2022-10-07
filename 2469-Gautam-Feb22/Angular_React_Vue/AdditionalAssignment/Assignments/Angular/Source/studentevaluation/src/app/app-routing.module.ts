import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StandardlistComponent } from './standardlist/standardlist.component';
import { StudentlistComponent } from './studentlist/studentlist.component';

const routes: Routes = [
  { path: '', redirectTo: 'standardlist', pathMatch: 'full' },
  {
    path: 'standardlist',
    component: StandardlistComponent,
    children: [
      { path: 'studentlist/:stdId', component: StudentlistComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
