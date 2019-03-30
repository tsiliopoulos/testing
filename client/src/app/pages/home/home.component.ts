// MEAN Portfolio
// File Name: home.component.ts
// Author: Minseok Choi
// StudentID: 300917184
// Date: 03/29/2019
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(route: ActivatedRoute) { }

  ngOnInit() {
  }

}
