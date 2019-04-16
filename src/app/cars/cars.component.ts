import { Component, OnInit } from '@angular/core';
import { Car } from '../car';
import { ColorsComponent } from '../colors/colors.component';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  car : Car = {
    id: 1,
    brand: 'Mercedes-Benz',
    model: 'C Class',
    //color: 'black'
  }


  constructor() { }

  ngOnInit() {
  }

}

