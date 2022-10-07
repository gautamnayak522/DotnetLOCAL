import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormdemoComponent } from './formdemo/formdemo.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';


@NgModule({
  declarations: [
    AppComponent,
    FormdemoComponent,
    ProfileEditorComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
