// MEAN Portfolio
// File Name: about.component.ts
// Author: Minseok Choi
// StudentID: 300917184
// Date: 03/29/2019

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {

  constructor(route: ActivatedRoute) {
    //super(route);
   }

  ngOnInit() {
  }


}
