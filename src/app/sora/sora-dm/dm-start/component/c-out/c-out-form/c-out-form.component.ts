import { SoraBaseComponent } from './../../../../../sora-shared/sora-base/sora-base.component';
import { Mainstockout } from './../../../../../sora-shared/sora-model';
import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import swal from 'sweetalert2';
import * as _ from "lodash";
declare var jQuery: any;
@Component({
  selector: 'app-c-out-form',
  templateUrl: './c-out-form.component.html',
  styleUrls: ['./c-out-form.component.css']
})
export class COutFormComponent extends SoraBaseComponent implements OnInit, OnChanges {



  model = new Mainstockout();

  @Input() fromlistData: Mainstockout;


  ngOnChanges() {
    this.getReceiverAll();
    this.model.receiver = 0;
    this.getReceiver();
    this.model = this.fromlistData;
    this.model.datestockout = this._SoraService.datenows();
  }

  getReceiverAll() {
    this._SoraService.apiData(45)
      .subscribe(res => this.models = res,
      err => console.log(err)
      , () => {
        // console.log(this.models);

      }
      );
  }


  getReceiver() {
    this._SoraService.apiData(44)
      .subscribe(res => this.models1 = res[0],
      err => console.log(err)
      , () => {
        this.model.receiver = this.models1.receiver;
      }
      );
  }

  btnShow: boolean = false;
  getmn() {
    this.model.numstockout = this.model.numstockin;
    this.model.priceout = Number(this.model.numstockout) * Number(this.model.pricen);
    this.btnShow = true;
  }

  doCheckNum() {
    if (this.model.numstockout > this.model.numstockin) {
      swal("จำนวนเบิกมากกว่า", "จำนวนที่มีใน Stock");
      this.model.numstockout = "";
      this.btnShow = false;
    } else if (this.model.numstockout <= '0') {
      swal("จำนวนเบิกไม่ถูกต้อง", "กรุณาเปลี่ยนตัวเลขใหม่");
      this.model.numstockout = "";
      this.btnShow = false;
    } else {
      this.model.priceout = Number(this.model.numstockout) * Number(this.model.pricen);
      this.btnShow = true;
    }
  }

  @Output() onCancel = new EventEmitter();

  doCancel() {
    this.onCancel.emit(true);
  }

  save() {
    console.log(this.model);
    this.model.hcode = this.hcode;
    this.model.usernames = '1';
    this.pd = this.model;
    this._SoraService.addData('mainstockout', 'soid', this.updateId, this.pd)
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
              swal(
                'ระบบทำการบันทึก!',
                'ข้อมูลเรียบร้อยแล้ว',
                'success'
              );
            }
          }
          );
        this.model = new Mainstockout();
        this.onCancel.emit(false);
      }
      );
  }



}
