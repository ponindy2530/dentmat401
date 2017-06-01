import { MainproductDt } from './../../../../sora-shared/sora-model';
import { SoraBaseComponent } from './../../../../sora-shared/sora-base/sora-base.component';
import { Component, OnInit, Input } from '@angular/core';
import swal from 'sweetalert2';
declare var jQuery: any;
import * as _ from "lodash";
@Component({
  selector: 'app-dmmain-add',
  templateUrl: './dmmain-add.component.html',
  styleUrls: ['./dmmain-add.component.css']
})
export class DmmainAddComponent extends SoraBaseComponent implements OnInit {




  // @Input() dataadd: MainproductDt;

  // shallow = new MainproductDt();
  // ngOnChanges() {
  //   this.model = this.dataadd;
  //   this.shallow = _.clone(this.dataadd);



  // }






  model = new MainproductDt();

  ngOnInit() {
    this.hcode = '10702';
    this.updateId = 0;
    jQuery('select').material_select();
    this.model.catid = 0;
    this.api3(36, this.hcode);
    this.api1(34, this.hcode);
    this.api2(35, this.hcode);

  }

  api(k, a, b) {
    this._SoraService.apiData2(k, a, b)
      .subscribe(res => this.models = res,
      err => console.log(err)
      , () => {
        // console.log(this.models);
      });
  }

  api1(k, a) {
    this._SoraService.apiData1(k, a)
      .subscribe(res => this.models1 = res,
      err => console.log(err)
      , () => {
        // console.log(this.models);
      });
  }

  api2(k, a) {
    this._SoraService.apiData1(k, a)
      .subscribe(res => this.models2 = res,
      err => console.log(err)
      , () => {
        // console.log(this.models);
      });
  }

  api3(k, a) {
    this._SoraService.apiData1(k, a)
      .subscribe(res => this.models3 = res,
      err => console.log(err)
      , () => {
        // console.log(this.models);
      });
  }
  getmcode(ev: any) {
    if (ev.target.value.length != 0) {
      this.api(33, this.hcode, ev.target.value);
    } else {
      this.models = [];
    }
  }

  getok(ev: any) {
    this.models = [];
    this.model.mcode = ev.mcode;
    this.model.mname = ev.mname;
    this.model.munit = ev.munit;
    this.model.catid = ev.catid;
  }

  save() {
    // console.log(this.model);
    // console.log(this.shallow);


    // console.log(_.isEqual(this.model, this.shallow));


    // if (_.isEqual(this.model, this.shallow) == true) {
    //   swal('ค่าเดิมไม่บันทึก');
    // } else {
    //   swal('ค่าใหม่บันทึก');
    // }




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
        this.ngOnInit();
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
          });
      }
      );
  }


}
