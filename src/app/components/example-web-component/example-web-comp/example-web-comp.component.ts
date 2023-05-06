import { Component } from '@angular/core';

@Component({
  selector: 'app-example-web-comp',
  templateUrl: './example-web-comp.component.html',
  styleUrls: ['./example-web-comp.component.scss']
})
export class ExampleWebCompComponent {
  exampleFoods: any[] =[
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
}
