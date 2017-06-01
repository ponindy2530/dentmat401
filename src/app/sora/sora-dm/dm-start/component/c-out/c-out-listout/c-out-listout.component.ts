import { SoraBaseComponent } from './../../../../../sora-shared/sora-base/sora-base.component';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import swal from 'sweetalert2';
import * as _ from "lodash";
declare var jQuery: any;
@Component({
  selector: 'app-c-out-listout',
  templateUrl: './c-out-listout.component.html',
  styleUrls: ['./c-out-listout.component.css']
})
export class COutListoutComponent extends SoraBaseComponent implements OnInit, OnChanges {




  @Input() apikeyListup: number;


  ngOnChanges(changes: SimpleChanges): void {
    let apiId = changes['apikeyListup'].currentValue;
    this.getData(apiId);
  }

  getData(apiId) {
    this._SoraService.apiData1(apiId, this.hcode)
      .subscribe(res => this.models = res,
      err => console.log(err)
      , () => {
        // console.log(this.models);
      });

  }


  geted(ev: any) {
    swal({
      title: 'ท่านต้องการ ?',
      text: "แก้ไขข้อมูล หรือ ลบข้อมูล!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'แก้ไข',
      cancelButtonText: 'ลบข้อมูล',
      confirmButtonClass: 'btn teal',
      cancelButtonClass: 'btn red',
      buttonsStyling: false
    }).then(() => {
      swal(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    }, (dismiss) => {
      // dismiss can be 'cancel', 'overlay',
      // 'close', and 'timer'
      if (dismiss === 'cancel') {
        this.delete(ev);
      }
    })
  }


  delete(ev: any) {
    swal({
      title: 'คุณแน่ใจไหม ?',
      text: "ที่จะลบข้อมูล " + ev.mname,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'ตกลง',
      cancelButtonText: 'ยกเลิก',
      confirmButtonClass: 'btn blue',
      cancelButtonClass: 'btn red',
      buttonsStyling: false
    }).then(() => {
      this.updateId = ev.soid;
      this._SoraService.delData('mainstockout', 'soid', this.updateId)
        .subscribe(res => this.del = res,
        err => console.log(err),
        () => {
          this.getData(this.apikeyListup);
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
                  'ตกลง !',
                  'การลบข้อมูล เรียบร้อยแล้ว',
                  'success'
                );
              }
            }
            );
        });
    }, (dismiss) => {
      // dismiss can be 'cancel', 'overlay',
      // 'close', and 'timer'
      if (dismiss === 'cancel') {
        swal(
          'ยกเลิก',
          'การลบข้อมูล เรียบร้อยแล้ว',
          'error'
        )
      }
    })
  }


}
