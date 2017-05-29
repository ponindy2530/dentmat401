import { Mainstockout } from './../../../../sora-shared/sora-model';
import { SoraBaseComponent } from './../../../../sora-shared/sora-base/sora-base.component';
import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
declare var jQuery: any;
@Component({
  selector: 'app-dmout-repo',
  templateUrl: './dmout-repo.component.html',
  styleUrls: ['./dmout-repo.component.css']
})
export class DmoutRepoComponent extends SoraBaseComponent implements OnInit {



  ngOnInit() {
    this.datestart = "2016-10-01";
    this.dateend = "2017-09-30";
    this.hcode = "10702";
    this.api1(13, this.hcode);
    this.api(9, this.hcode, this.datestart, this.dateend);
  }

  api(k, a, b, c) {
    this._SoraService.apiData3(k, a, b, c)
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
        // console.log(this.models1);
      });
  }

  delect(ev: any) {
    swal({
      title: 'ท่านต้องการจะลบข้อมูล ?',
      text: "ใช่หรือไม่ ถ้าใช่กด ตกลง ถ้าไม่กด ยกเลิก !!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'ตกลง',
      cancelButtonText: 'ยกเลิก',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger red',
      buttonsStyling: false
    }).then(() => {
      this.updateId = ev.soid;
      this._SoraService.delData('mainstockout', 'soid', this.updateId)
        .subscribe(res => this.del = res,
        err => console.log(err),
        () => {
          this.api(9, this.hcode, this.datestart, this.dateend);
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
                  'ระบบทำการลบ!',
                  'ข้อมูลเรียบร้อยแล้ว',
                  'success'
                );
              }
            }
            );
        }
        );
    }, (dismiss) => {
      // dismiss can be 'cancel', 'overlay',
      // 'close', and 'timer'
      if (dismiss === 'cancel') {
        swal(
          'ระบบทำการยกเลิก',
          'การลบข้อมูลเรียบร้อยแล้ว :)',
          'error'
        )
      }
    })
  }

  model = new Mainstockout();
  oldnumstockout: string;
  edit(ev: any) {
    jQuery('select').material_select();
    jQuery('.modal').modal({
      dismissible: false
    });
    this.updateId = ev.soid;
    const xx = Number(ev.numstockin) + Number(ev.numstockout);
    this.model = ev;
    this.model.numstockin = xx;
    this.oldnumstockout = ev.numstockout;

  }

  save() {
    this._SoraService.addData('mainstockout', 'soid', this.updateId, this.model)
      .subscribe(resproducts => this.addmodel = resproducts,
      err => console.log(err),
      () => {
        this.model = new Mainstockout();
        this.api(9, this.hcode, this.datestart, this.dateend);
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

      }
      );
  }

  doCalPricelot() {
    this.model.priceout = Number(this.model.pricen) * Number(this.model.numstockout);
    if (Number(this.model.numstockout) > Number(this.model.numstockin)) {
      swal(
        'ไม่สามารถทำรายการเบิกจ่ายได้',
        'เนื่องจ่ายจำนวนคงเหลือใน Lot นี้น้อยกว่าจำนวนเบิกจ่าย',
        'error'
      )
      this.model.numstockout = this.oldnumstockout;
    }
  }

  doCancel() {
    jQuery('#modal1').modal('close');
  }

}
