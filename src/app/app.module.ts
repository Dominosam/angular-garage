import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CarsComponent } from './cars/cars.component';
import { ColorsComponent } from './colors/colors.component';

import { MatSelectModule } from '@angular/material/select'

@NgModule({
  imports:      [ BrowserModule, FormsModule, MatSelectModule ],
  declarations: [ AppComponent, HelloComponent, CarsComponent, ColorsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
