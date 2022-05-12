import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
})
export class FirstComponentComponent implements OnInit {
  name: string = 'Guilherme';
  age: number = 25;
  job = 'Programador';
  hobbies = ['Correr', 'Jogar', 'Lutar Muai Thay'];
  car = {
    name: 'Jac',
    year: 2012,
  };

  constructor() {}

  ngOnInit(): void {}
}
