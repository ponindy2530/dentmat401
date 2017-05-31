import { Component, OnInit } from '@angular/core';

import { ProductService } from './psc_server';
import { UserService } from './psc_user.service';
import {  ConfirmationService } from 'primeng/primeng';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PscShareModule } from './psc_shared.module';

import * as _ from "lodash";
@Component({
  selector: 'app-base',
  templateUrl: './psc_base.component.html',
  styleUrls: ['./psc_base.component.css']
})
export class BaseComponent implements OnInit {
  
  constructor(public _productService: ProductService, public route: ActivatedRoute,
    public router: Router, public confirmationService: ConfirmationService, public userService: UserService) {
      
     }
  model: any; models:any[];
  
  ngOnInit() {
  }

}
