import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-v-dashboard',
  templateUrl: './v-dashboard.component.html',
  styleUrls: ['./v-dashboard.component.css']
})
export class VDashboardComponent implements OnInit {

  apiKey1: number = 41;
  apiKey2: number = 42;
  apiKeytop10: number = 31;
  apiKeypie: number = 39;

  apikeyCat: number = 34;

  apikeyListOut: number = 43;

  constructor() { }

  ngOnInit() {
  }

}
