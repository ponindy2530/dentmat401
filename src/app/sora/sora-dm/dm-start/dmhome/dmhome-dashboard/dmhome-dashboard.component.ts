import { MainproductDt } from './../../../../sora-shared/sora-model';
import { SoraBaseComponent } from './../../../../sora-shared/sora-base/sora-base.component';
import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
declare var jQuery: any;
import * as _ from "lodash";
@Component({
  selector: 'app-dmhome-dashboard',
  templateUrl: './dmhome-dashboard.component.html',
  styleUrls: ['./dmhome-dashboard.component.css']
})
export class DmhomeDashboardComponent extends SoraBaseComponent implements OnInit {

  dataTable: boolean = true;
  fedit: Boolean = false;
  ngOnInit() {
    this.datestart = "2016-10-01";
    this.dateend = "2017-09-30";
    this.hcode = "10702";

    jQuery('ul.tabs').tabs();
    jQuery('.collapsible').collapsible();

    this.api5(34, this.hcode);
    this.model.catid = 0;
    this.api4(35, this.hcode);
    this.api7(40, this.hcode, this.datestart, this.dateend);

  }

  api(k, a, b, c, d) {
    this._SoraService.apiData4(k, a, b, c, d)
      .subscribe(res => this.models = res,
      err => console.log(err)
      , () => {
        // console.log(this.models);
      });
  }

  api1(k, a, b, c, d) {
    this._SoraService.apiData4(k, a, b, c, d)
      .subscribe(res => this.models1 = res,
      err => console.log(err)
      , () => {
        // console.log(this.models1);
      });
  }

  api5(k, a) {
    this._SoraService.apiData1(k, a)
      .subscribe(res => this.models5 = res,
      err => console.log(err)
      , () => {
        // console.log(this.models);
      });
  }

  api4(k, a) {
    this._SoraService.apiData1(k, a)
      .subscribe(res => this.models2 = res,
      err => console.log(err)
      , () => {
        // console.log(this.models);
      });
  }

  api7(k, a, b, c) {
    this._SoraService.apiData3(k, a, b, c)
      .subscribe(res => this.models = res,
      err => console.log(err)
      , () => {
        console.log(this.models);
      });
  }


  getsc(ev: any) {
    // console.log(ev.target.value);
    // this.api7(40, this.hcode, this.datestart, this.dateend);
    // this.api(26, this.hcode, this.datestart, this.dateend, ev.target.value);
    this.dataTable = true;
  }


  incatid(ev: any) {
    this.api(37, this.hcode, this.datestart, this.dateend, ev);
    this.dataTable = true;
  }

  insup(ev: any) {
    this.api(38, this.hcode, this.datestart, this.dateend, ev);
    this.dataTable = true;
  }

  showProduct: any;
  getsearch(ev: any) {
    this.showProduct = ev;
    this.api1(27, this.hcode, this.datestart, this.dateend, ev.mid);
    jQuery('.modal').modal({
      dismissible: false
    });
  }

  doCancel() {
    jQuery('#modal1').modal('close');
  }




  model = new MainproductDt();
  edit(ev: any) {
    this.model = ev;
    this.updateId = ev.mid;
    this.dataTable = false;
    this.fedit = true;
  }

  fcancel() {
    this.dataTable = true;
    this.fedit = false;
  }


  save() {
    if (this.updateId < 1) {
      if (_.find(this.models2, ['mname', this.model.mname]) && _.find(this.models2, ['mcode', this.model.mcode])) {
        swal(
          'โปรดป้อนรหัสและชื่อ',
          'ที่ไม่ซ้ำกับที่มีอยู่แล้ว',
          'error'
        );
        this.model = new MainproductDt();
        return;
      } else if (_.find(this.models2, ['mcode', this.model.mcode])) {
        swal(
          'โปรดป้อนรหัส',
          'ที่ไม่ซ้ำกับที่มีอยู่แล้ว',
          'error'
        );
        this.model.mcode = '';
        return;
      } else if (_.find(this.models2, ['mname', this.model.mname])) {
        swal(
          'โปรดป้อนชื่อ',
          'ที่ไม่ซ้ำกับที่มีอยู่แล้ว',
          'error'
        );
        this.model.mname = '';
        return;
      } else {
        this.saveto();
      }
    } else {
      this.saveto();
    }



  }

  saveto() {
    this.model.hcode = '10702';
    this.model.usernames = '1';
    this.pd = this.model;
    this._SoraService.addData('mainproduct', 'mid', this.updateId, this.pd)
      .subscribe(resproducts => this.addmodel = resproducts,
      err => console.log(err),
      () => {
        this.model = new MainproductDt();
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
              this.dataTable = true;
              this.fedit = false;
              swal(
                'ระบบทำการบันทึก!',
                'ข้อมูลเรียบร้อยแล้ว',
                'success'
              );
            }
          });
      }
      );
  }


  del: any;
  delete(ev: any, index: number) {
    if (Number(ev.stin) == 0) {
      swal({
        title: 'คุณแน่ใจไหม ?',
        text: "คุณจะไม่สามารถย้อนกลับได้",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'ตกลง !',
        cancelButtonText: 'ยกเลิก !',
        confirmButtonClass: 'btn btn-success',
        cancelButtonClass: 'btn btn-danger',
        buttonsStyling: false
      }).then(() => {
        this.updateId = ev.mid;
        this._SoraService.delData('mainproduct', 'mid', this.updateId)
          .subscribe(resproducts => this.del = resproducts,
          err => console.log(err),
          () => {
            swal(
              'ระบบทำการลบ!',
              'ข้อมูลเรียบร้อยแล้ว',
              'success'
            );
            this.models = this.models.filter((val, i) => i != index);
          }
          );
      }, (dismiss) => {
        // dismiss can be 'cancel', 'overlay',
        // 'close', and 'timer'
        if (dismiss === 'cancel') {
          swal(
            'ยกเลิก',
            'การลบข้อมูลเรียบร้อยแล้ว :)',
            'error'
          )
        }
      })
    } else {
      swal(
        'ไม่สามารถลบได้',
        'เนื่องจากมีวัสดุมากกว่า 0',
        'error'
      );
      return;
    }
  }

}
