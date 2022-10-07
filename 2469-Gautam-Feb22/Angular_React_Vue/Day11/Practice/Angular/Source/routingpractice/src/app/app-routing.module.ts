import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CssComponent } from './css/css.component';
import { HomeComponent } from './home/home.component';
import { HtmlComponent } from './html/html.component';

const routes: Routes = 
[
  {path:"home",component:HomeComponent,children:[
    {path:"html",component:HtmlComponent},
    {path:"css",component:CssComponent},
    {path:"bootstrap",component:BootstrapComponent}
  ]},
  {path:"aboutus",component:AboutusComponent},
  {path:"contactus",component:ContactusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
