import { MainproductDt } from './../../../../sora-shared/sora-model';
import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
declare var jQuery: any;
import * as _ from "lodash";
@Component({
  selector: 'app-v-main',
  templateUrl: './v-main.component.html',
  styleUrls: ['./v-main.component.css']
})
export class VMainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    jQuery('ul.tabs').tabs();
    jQuery('.collapsible').collapsible();

    jQuery(document).ready(() => {
      jQuery('.modal').modal({
        dismissible: true
      });
    });

  }
  opcat: boolean = true;
  opsc: boolean = true;
  oplist: boolean = false;
  opform: boolean = false;
  opshowlist: boolean = false;
  oplistnew: boolean = false;
  opshowlistform: boolean = false;
  tolist: string;
  apiKeylist: number;

  apiKeylistnew: number = 49;
  getFilter(ev: string) {
    if (ev.length >= 2) {
      this.opform = false;
      this.oplist = true;
      this.tolist = ev;
      this.apiKeylist = 47;

    } else {
      this.oplist = false;
    }
  }

  showProduct: any;
  getdatashow2(ev: any) {
    jQuery('.modal').modal({
      dismissible: false
    });
    this.opshowlist = true;
    this.showProduct = ev;
  }

  showform() {
    this.opform = true
    this.oplist = false;
    this.opsc = false;
    this.opcat = false;
    this.oplistnew = true;
    this.dataaddform = new MainproductDt;
  }

  outform() {
    this.opform = false;
    this.opsc = true;
    this.opcat = true;
    this.oplistnew = false;
  }

  tolistform2: string;
  onscformlest(ev: string) {
    if (ev.length >= 2) {
      this.opshowlistform = true;
      this.tolistform2 = ev;
    } else {
      this.opshowlistform = false;
    }
  }
  dataaddform = new MainproductDt;
  getdataformshow2(ev: any) {
    this.opshowlistform = false;
    this.dataaddform = ev;
  }

  getdataedit2(ev: any) {
    this.opform = true
    this.opsc = false;
    this.opcat = false;
    this.dataaddform = ev;
  }

  formsuccess2(ev: any) {
    if (ev == true) {
      this.oplistnew = true;
      this.dataaddform = new MainproductDt;
    } else {
      this.opform = false;
      this.opcat = true;
      this.opsc = true;
      this.oplistnew = false;
      this.dataaddform = new MainproductDt;

    }

  }


  gettocat2(ev: string) {
    this.opform = false;
    this.oplist = true;
    this.tolist = ev;
    this.apiKeylist = 51;
  }

  gettosup2(ev: string) {
    this.opform = false;
    this.oplist = true;
    this.tolist = ev;
    this.apiKeylist = 38;
  }

  getlitsnewsx(ev: any) {
    this.oplistnew = false;
  }


  getdataeditlist2(ev: any) {
    this.dataaddform = ev;
  }




}
