import { Mainstockout } from './../../../../sora-shared/sora-model';
import { SoraBaseComponent } from './../../../../sora-shared/sora-base/sora-base.component';
import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import * as _ from "lodash";
declare var jQuery: any;
@Component({
  selector: 'app-dmout-add',
  templateUrl: './dmout-add.component.html',
  styleUrls: ['./dmout-add.component.css']
})
export class DmoutAddComponent extends SoraBaseComponent implements OnInit {
  apikeyListOut: number = 43;
  apikeyCat: number = 34;
  apikeyListup: number = 46;
  openform: boolean = false;
  openpage: boolean = false;
  openlist: boolean = true;
  ngOnInit() {
    jQuery('.collapsible').collapsible();
    this.datestart = "2016-10-01";
    this.dateend = "2017-09-30";
    this.hcode = "10702";
    this.updateId = 0;
    this.model.lotnumber = 0;
    this.model.receiver = 0;
    this.model.datestockout = this._SoraService.datenows();
    this.api1(13, this.hcode);
    this.api(10, this.hcode, this.datestart, this.dateend);
  }

  api(k, a, b, c) {
    this._SoraService.apiData3(k, a, b, c)
      .subscribe(res => this.models = res,
      err => console.log(err)
      , () => {
        // console.log(this.models);
      }
      );
  }

  api1(k, a) {
    this._SoraService.apiData1(k, a)
      .subscribe(res => this.models1 = res,
      err => console.log(err)
      , () => {
        // console.log(this.models1);
      });
  }

  api2(k, a) {
    this._SoraService.apiData1(k, a)
      .subscribe(res => this.models2 = res[0],
      err => console.log(err)
      , () => {
        this.model.receiver = this.models2.receiver;
      }
      );
  }

  model = new Mainstockout();
  munit: string;
  edit(ev: any) {
    jQuery('select').material_select();
    jQuery('.modal').modal({
      dismissible: false
    });
    this._SoraService.apiData1(12, this.hcode)
      .subscribe(res => this.models2 = res[0],
      err => console.log(err)
      , () => {
        this.model.receiver = this.models2.receiver;
      }
      );
    this._SoraService.apiData3(11, ev.mid, this.datestart, this.dateend)
      .subscribe(res => this.models3 = res,
      err => console.log(err)
      , () => {
        // console.log(this.models3);

      }
      );
    this.model.datestockout = this._SoraService.datenows();
    this.model.mcode = ev.mcode;
    this.model.mid = ev.mid;
    this.model.mname = ev.mname;
    this.munit = ev.munit;
  }

  doCancel() {
    jQuery('#modal1').modal('close');
  }

  pricen2: string;
  getoutin(ev: any) {
    let res = _.find(this.models3, ['lotid', ev.target.value]);
    this.model.numstockin = res['numstockin'];
    this.model.pricen = res['pricen'];
    this.model.numstockout = "";
  }

  doCheckNum() {
    if (this.model.numstockout > this.model.numstockin) {
      swal("จำนวนเบิกมากกว่า", "จำนวนที่มีใน Stock");
      this.model.numstockout = "";
      return false;
    } else if (this.model.numstockout <= '0') {
      swal("จำนวนเบิกไม่ถูกต้อง", "กรุณาเปลี่ยนตัวเลขใหม่");
      this.model.numstockout = "";
      return false;
    } else {
      this.model.priceout = Number(this.model.numstockout) * Number(this.model.pricen);
    }
  }

  getmn() {
    this.model.numstockout = this.model.numstockin;
    this.model.priceout = Number(this.model.numstockout) * Number(this.model.pricen);
  }

  save() {
    this.model.hcode = this.hcode;
    this.model.usernames = '1';
    this.pd = this.model;
    this._SoraService.addData('mainstockout', 'soid', this.updateId, this.pd)
      .subscribe(resproducts => this.addmodel = resproducts,
      err => console.log(err),
      () => {
        jQuery('#modal1').modal('close');
        swal({
          title: 'กรุณารอสักครู่ !!',
          text: 'ระบบกำลังทำการประมวลผล',
          showCancelButton: false,
          showConfirmButton: false,
          timer: 2000
        }).then(
          () => { },
          // handling the promise rejection
          (dismiss) => {
            if (dismiss === 'timer') {
              swal(
                'ระบบทำการบันทึก!',
                'ข้อมูลเรียบร้อยแล้ว',
                'success'
              );
            }
          }
          );
        this.model = new Mainstockout();
        this._Router.navigate(["dmstart/dmoutrepo"]);
      }
      );
  }

  fromlistData: Mainstockout;
  listData(ev: any) {
    this.fromlistData = ev;
    this.opedit();
  }


  //กดปุ่มเบิก
  opedit() {
    this.openform = true;
    this.openpage = false;
    this.openlist = false;
  }

  //กดปุ่มยกเลิก
  opCancel() {
    this.openform = false;
    this.openpage = false;
    this.openlist = true;
  }

  //กดปุ่มบันทึก
  opsave() {
    this.openform = false;
    this.openpage = true;
    this.openlist = false;
  }

  okCancel(ev: boolean) {

    if (ev == true) {
      this.opCancel();
    } else {
      this.opsave();
    }
  }
}
