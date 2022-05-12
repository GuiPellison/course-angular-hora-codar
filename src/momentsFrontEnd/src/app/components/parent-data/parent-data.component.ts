import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css'],
})
export class ParentDataComponent implements OnInit {
  userName = 'Joaquim';
  userData = {
    email: 'joaquin@email.com',
    role: 'Admin',
  };

  constructor() {}

  ngOnInit(): void {}
}
