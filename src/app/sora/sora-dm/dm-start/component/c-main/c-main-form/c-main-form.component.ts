import { SoraBaseComponent } from './../../../../../sora-shared/sora-base/sora-base.component';
import { MainproductDt } from './../../../../../sora-shared/sora-model';
import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import swal from 'sweetalert2';
declare var jQuery: any;
import * as _ from "lodash";
@Component({
  selector: 'app-c-main-form',
  templateUrl: './c-main-form.component.html',
  styleUrls: ['./c-main-form.component.css']
})
export class CMainFormComponent extends SoraBaseComponent implements OnInit, OnChanges {

  model = new MainproductDt();

  @Input() dataaddform: MainproductDt;


  ngOnChanges() {
    this.model = new MainproductDt();
    let apiId = 34;
    this.getData(apiId);
    this.model.catid = 0;
    this.model = this.dataaddform;
  }
  ngOnInit() {


    this.api4(35, this.hcode);

  }


  getData(apiId) {
    this._SoraService.apiData(apiId)
      .subscribe(res => this.models = res,
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


  save() {
    if (this.model.mid > 0) {
      this.updateId = this.model.mid;
    } else {
      this.updateId = 0;
    }
    if (this.updateId < 1) {
      if (_.find(this.models2, ['mname', this.model.mname]) && _.find(this.models2, ['mcode', this.model.mcode])) {
        swal(
          'โปรดป้อนรหัสและชื่อ',
          'ที่ไม่ซ้ำกับที่มีอยู่แล้ว',
          'error'
        );
      } else if (_.find(this.models2, ['mcode', this.model.mcode])) {
        swal(
          'โปรดป้อนรหัส',
          'ที่ไม่ซ้ำกับที่มีอยู่แล้ว',
          'error'
        );
      } else if (_.find(this.models2, ['mname', this.model.mname])) {
        swal(
          'โปรดป้อนชื่อ',
          'ที่ไม่ซ้ำกับที่มีอยู่แล้ว',
          'error'
        );
      } else {
        this.saveto();
      }
    } else {
      this.saveto();
    }



  }

  @Output() formsuccess = new EventEmitter;

  saveto() {
    this.model.hcode = this.hcode;
    this.model.usernames = '1';
    this.pd = this.model;
    this._SoraService.addData('mainproduct', 'mid', this.updateId, this.pd)
      .subscribe(resproducts => this.addmodel = resproducts,
      err => console.log(err),
      () => {
        swal({
          title: 'กรุณารอสักครู่ !!',
          text: 'ระบบกำลังทำการประมวลผล',
          showCancelButton: false,
          showConfirmButton: false,
          timer: 1000
        }).then(
          () => { },
          // handling the promise rejection
          (dismiss) => {
            if (dismiss === 'timer') {
              this.model = new MainproductDt();
              this.formsuccess.emit(true);
            }
          });
      }
      );
  }





}
