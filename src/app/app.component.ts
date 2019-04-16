import { Component } from '@angular/core';
import { CarsComponent } from './cars/cars.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  title = 'Angular garage';
}
