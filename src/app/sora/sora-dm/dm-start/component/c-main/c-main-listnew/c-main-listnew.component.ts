import { SoraBaseComponent } from './../../../../../sora-shared/sora-base/sora-base.component';
import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import swal from 'sweetalert2';
declare var jQuery: any;
import * as _ from "lodash";
@Component({
  selector: 'app-c-main-listnew',
  templateUrl: './c-main-listnew.component.html',
  styleUrls: ['./c-main-listnew.component.css']
})
export class CMainListnewComponent extends SoraBaseComponent implements OnInit, OnChanges {


  @Input() apiKeylistnew: number;


  ngOnChanges(): void {
    let apiId = this.apiKeylistnew;
    this.openData(apiId);
  }



  openData(apiId) {
    this._SoraService.apiData1(apiId, this.hcode)
      .subscribe(res => this.models = res,
      err => console.log(err),
      () => {
        console.log(this.models);
      }
      );
  }

  @Output() getdataeditlist = new EventEmitter();
  edit(ev: any) {
    this.getdataeditlist.emit(ev);
  }


  delete(ev: any) {
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
          this.openData(49);
          swal(
            'ระบบทำการลบ!',
            'ข้อมูลเรียบร้อยแล้ว',
            'success'
          );
        }
        );
    }, (dismiss) => {
      if (dismiss === 'cancel') {
        swal(
          'ยกเลิก',
          'การลบข้อมูลเรียบร้อยแล้ว :)',
          'error'
        )
      }
    })

  }

}
