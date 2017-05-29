import { SoraService } from './../../../../sora-shared/sora-server';
import { SoraBaseComponent } from './../../../../sora-shared/sora-base/sora-base.component';
import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
import swal from 'sweetalert2';
@Component({
  selector: 'app-dmmain-search',
  templateUrl: './dmmain-search.component.html',
  styleUrls: ['./dmmain-search.component.css']
})
export class DmmainSearchComponent extends SoraBaseComponent implements OnInit {



  ngOnInit() {
    this.datestart = "2016-10-01";
    this.dateend = "2017-09-30";
    this.hcode = "10702";
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

  getsc(ev: any) {
    if (ev.target.value.length != 0) {
      this.api(26, this.hcode, this.datestart, this.dateend, ev.target.value);
    } else {
      this.models = [];
    }
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

  edit(ev: any) {

  }

  tbl: any = "mainproduct";//เปลี่ยน
  fd: any = "mid";//เปลี่ยน'
  del: any;
  delete(ev: any) {
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
        this._SoraService.delData(this.tbl, this.fd, this.updateId)
          .subscribe(resproducts => this.del = resproducts,
          err => console.log(err),
          () => {
            swal(
              'ระบบทำการลบ!',
              'ข้อมูลเรียบร้อยแล้ว',
              'success'
            );

            this._SoraService.apiData3(17, this.hcode, this.datestart, this.dateend)
              .subscribe(resproducts => this.models = resproducts,
              err => console.log(err)
              , () => {
                // console.log(this.models);
              }
              );
          }
          );
      }, (dismiss) => {
        // dismiss can be 'cancel', 'overlay',
        // 'close', and 'timer'
        if (dismiss === 'cancel') {
          swal(
            'Cancelled',
            'Your imaginary file is safe :)',
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
