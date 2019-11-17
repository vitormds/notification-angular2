import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ExampleComponent } from './example.component';

import { SimpleNotificationsModule } from 'angular2-notifications';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [ 
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    SimpleNotificationsModule.forRoot()
  ],
  declarations: [ AppComponent, ExampleComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
