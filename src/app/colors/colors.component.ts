import { Component, OnInit } from '@angular/core';
import { MatSelectModule } from '@angular/material/select'

export interface Color {
  value: string;
  viewValue: string;
}

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css']
})
export class ColorsComponent implements OnInit {
  colors: Color[] = [
    {value: 'black-0', viewValue: 'Black'},
    {value: 'red-1', viewValue: 'Red'},
    {value: 'white-2', viewValue: 'White'}
    ] 

    foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  
  constructor() { 
    

  }

  ngOnInit() {
    
  }

}