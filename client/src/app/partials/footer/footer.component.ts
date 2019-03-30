// MEAN Portfolio
// File Name: footer.component.ts
// Author: Minseok Choi
// StudentID: 300917184
// Date: 03/29/2019
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  year: number;   // to display the current year on copyright
  constructor() { }

  ngOnInit() {
    const date = new Date();
    this.year = date.getFullYear();
  }

}
