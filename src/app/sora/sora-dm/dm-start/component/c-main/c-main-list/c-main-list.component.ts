import { MainproductDt } from './../../../../../sora-shared/sora-model';
import { SoraBaseComponent } from './../../../../../sora-shared/sora-base/sora-base.component';
import { Component, OnInit, OnChanges, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';
import swal from 'sweetalert2';
declare var jQuery: any;
import * as _ from "lodash";
@Component({
  selector: 'app-c-main-list',
  templateUrl: './c-main-list.component.html',
  styleUrls: ['./c-main-list.component.css']
})
export class CMainListComponent extends SoraBaseComponent implements OnInit, OnChanges {

  @Input() apiKey: string;
  shallow: string;
  ngOnChanges(changes: SimpleChanges): void {
    let getText = changes['apiKey'].currentValue;
    this.shallow = _.clone(getText); //ก๊อปค่าไว้
    this.onText(getText);

  }

  onText(ev: string) {
    if (ev.length >= 2) {
      this._ServiceMainService.getData4(47, this.hcode, this.datestart, this.dateend, ev)
        .subscribe(res => this.models = res,
        err => console.log(err)
        , () => {
          // console.log(this.models);

        });

    } else {
      this.models = [];
    }
  }

  @Output() getdatashow = new EventEmitter();
  getsearch(ev: any) {
    this.getdatashow.emit(ev);
  }
  @Output() getdataedit = new EventEmitter();
  edit(ev: any) {
    this.getdataedit.emit(ev);
  }


  // delete(ev: any) {

  //   //Actual logic to perform a confirmation
  //   console.log(ev);

  //   console.log(this.models.indexOf(ev));
  //   this.models.splice(this.models.indexOf(ev), 1);


  // }

  delete(ev: any) {
    if (Number(ev.stin) == 0) {
      swal({
        title: 'คุณแน่ใจไหม ?',
        text: "ที่จะลบข้อมูล " + ev.mname,
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'ตกลง !',
        cancelButtonText: 'ยกเลิก !',
        confirmButtonClass: 'btn teal',
        cancelButtonClass: 'btn red',
        buttonsStyling: false
      }).then(() => {
        this.updateId = ev.mid;
        this._SoraService.delData('mainproduct', 'mid', this.updateId)
          .subscribe(resproducts => this.del = resproducts,
          err => console.log(err),
          () => {
            this.onText(this.shallow);
            swal(
              'ระบบทำการลบ!',
              'ข้อมูลเรียบร้อยแล้ว',
              'success'
            );
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
        'เนื่องจากมีรายการรับเข้าเบิกจ่ายมากกว่า 0',
        'error'
      );
      return;
    }
  }
}


