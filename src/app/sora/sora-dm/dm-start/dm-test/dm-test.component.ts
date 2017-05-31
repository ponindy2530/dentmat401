import { MainproductDt } from './../../../sora-shared/sora-model';
import { SoraBaseComponent } from './../../../sora-shared/sora-base/sora-base.component';
import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
@Component({
  selector: 'app-dm-test',
  templateUrl: './dm-test.component.html',
  styleUrls: ['./dm-test.component.css']
})
export class DmTestComponent extends SoraBaseComponent implements OnInit {

  apiKey1: number = 41;
  apiKey2: number = 42;
  apiKeytop10: number = 31;
  apiKeypie: number = 39;

  ngOnInit() {

    this.datestart = "2016-10-01";
    this.dateend = "2017-09-30";
    this.hcode = "10702";




    // jQuery('.modal').modal({
    //   dismissible: false
    // });
    // this.api7(40, this.hcode, this.datestart, this.dateend);
  }

  // api7(k, a, b, c) {
  //   this._SoraService.apiData3(k, a, b, c)
  //     .subscribe(res => this.models = res,
  //     err => console.log(err)
  //     , () => {
  //       console.log(this.models);
  //     });
  // }

  // stop() {
  //   jQuery('#modal1').modal('close');
  // }

  // dataform: boolean = false
  // dataadd: any;
  // getadd(item) {
  //   this.dataform = true;
  //   this.dataadd = item
  // }

}
