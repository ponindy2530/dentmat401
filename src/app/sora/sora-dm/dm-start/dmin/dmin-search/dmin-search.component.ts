import { Mainstockin } from './../../../../sora-shared/sora-model';
import { SoraBaseComponent } from './../../../../sora-shared/sora-base/sora-base.component';
import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
declare var jQuery: any;
@Component({
  selector: 'app-dmin-search',
  templateUrl: './dmin-search.component.html',
  styleUrls: ['./dmin-search.component.css']
})
export class DminSearchComponent extends SoraBaseComponent implements OnInit {



  ngOnInit() {
    this.datestart = "2016-10-01";
    this.dateend = "2017-09-30";
    this.hcode = "10702";
    this.updateId = 0;
    this.model.supid = 0;
    this.api1(5, this.hcode);
  }


  api5(k, a, b, c, d) {
    this._SoraService.apiData4(k, a, b, c, d)
      .subscribe(res => this.models5 = res,
      err => console.log(err)
      , () => {
        // console.log(this.models);
      });
  }

  getsc(ev: any) {
    if (ev.target.value.length != 0) {
      this.api5(29, this.hcode, this.datestart, this.dateend, ev.target.value);
    } else {
      this.models = [];
    }
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


  model = new Mainstockin();
  munit: string;
  edit(ev: any) {
    console.log(ev);
    
    jQuery('select').material_select();
    jQuery('.modal').modal({
      dismissible: false
    });
    this.model.datestockin = this._SoraService.datenows();
    this.model.mcode = ev.mcode;
    this.model.mid = ev.mid;
    this.model.mname = ev.mname;
    this.munit = ev.munit;
  }

  doCalPricelot() {
    this.model.pricelot = Number(this.model.pricen) * Number(this.model.numstockin);
  }

  doCalPricen() {
    if (Number(this.model.numstockin) > 0) {
      this.model.pricen = Number(this.model.pricelot) / Number(this.model.numstockin);
    }
  }


  save() {
    this.model.hcode = this.hcode;
    this.model.usernames = '1';
    this.pd = this.model;
    this._SoraService.addData('mainstockin', 'lotid', this.updateId, this.pd)
      .subscribe(res => this.addmodel = res,
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
          });
        this.model = new Mainstockin();
        this._Router.navigate(["dmstart/dminrepo"]);
      }
      );
  }

  doCancel() {
    jQuery('#modal1').modal('close');
  }
  getexp(ev: any) {
    const currentTime = new Date();
    const y = currentTime.getFullYear();
    if (ev.target.value.length >= 2) {
      if (ev.target.value.substr(0, 2) == 20) {
        if (ev.target.value.length >= 4) {
          if (ev.target.value.substr(0, 4) >= y.toString().substr(0, 4)) {
            if (ev.target.value.length >= 5) {
              if (ev.target.value.substr(4, 1) == 0 || ev.target.value.substr(4, 1) == 1) {
                if (ev.target.value.length == 6) {
                  if (ev.target.value.substr(4, 1) == 0) {
                    if (ev.target.value.substr(5, 1) == 0) {
                      swal(
                        ' ตัวเลขหลัก 6 ไม่ถูกต้อง!',
                        'ต้องเป็นเลข 1 ถึง 9 เท่านั้น'
                      );
                      this.model.expire = ev.target.value.substr(0, 5);
                    }
                  } else {
                    if (ev.target.value.substr(5, 1) == 3 || ev.target.value.substr(5, 1) == 4 || ev.target.value.substr(5, 1) == 5 || ev.target.value.substr(5, 1) == 6 || ev.target.value.substr(5, 1) == 7 || ev.target.value.substr(5, 1) == 8 || ev.target.value.substr(5, 1) == 9) {
                      swal(
                        ' ตัวเลขหลัก 6 ไม่ถูกต้อง!',
                        'ต้องเป็นเลข 0 ถึง 2 เท่านั้น'
                      );
                      this.model.expire = ev.target.value.substr(0, 5);
                    }
                  }

                } else {
                  this.model.expire = ev.target.value.substr(0, 6);
                }

              } else {
                swal(
                  ' ตัวเลขหลัก 5 ไม่ถูกต้อง!',
                  'ต้องเป็นเลข 0 หรือ 1 เท่านั้น'
                );
                this.model.expire = ev.target.value.substr(0, 4);
              }
            }
          } else {
            swal(
              'ปี ค.ศ ไม่ถูกต้อง !',
              'ปี ค.ศ ต้องมากกว่า หรือ เท่ากับปี ' + y + ' เท่านั้น'
            );
            this.model.expire = 20;
          }
        }
      } else {
        swal(
          'ตัวเลข 2 หลักแรกไม่ถูกต้อง !',
          'ต้องเป็นเลข 20 เท่านั้น ระบบจะเปลี่ยนแปลงค่าอัตโนมัติ'
        );
        this.model.expire = 20;
      }

    }
  }

}

