import { CookieService } from 'angular2-cookie/services/cookies.service';
import { SoraService } from './../sora-server';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-sora-base',
  templateUrl: './sora-base.component.html',
  styleUrls: ['./sora-base.component.css']
})
export class SoraBaseComponent implements OnInit {

  constructor(
    public _SoraService: SoraService,
    public _CookieService: CookieService,
    public _ActivatedRoute: ActivatedRoute,
    public _Router: Router
  ) { }

  fmodel: any = [];
  models: any = [];

  models1: any = [];
  models2: any = [];
  models3: any = [];
  models4: any = [];
  models5: any = [];
  fmodels: any = [];
  fmodels1: any = [];
  fmodels2: any = [];
  fmodels3: any = [];
  fmodels4: any = [];
  fmodels5: any = [];
  datestart: string;
  dateend: string;
  hcode: string;
  display: boolean = false;
  updateId: number;
  pd: any;
  addmodel:any = [];
  del: any;
  ngOnInit() {
  }

}
