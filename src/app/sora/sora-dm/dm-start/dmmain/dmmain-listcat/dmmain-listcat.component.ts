import { SoraBaseComponent } from './../../../../sora-shared/sora-base/sora-base.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dmmain-listcat',
  templateUrl: './dmmain-listcat.component.html',
  styleUrls: ['./dmmain-listcat.component.css']
})
export class DmmainListcatComponent extends SoraBaseComponent implements OnInit {

  ngOnInit() {
    this.datestart = "2016-10-01";
    this.dateend = "2017-09-30";
    this.hcode = "10702";
    this.api2(24, this.hcode, this.datestart, this.dateend);
    // this.api(17, this.hcode, this.datestart, this.dateend);
  }



  api2(k, a, b, c) {
    this._SoraService.apiData3(k, a, b, c)
      .subscribe(res => this.models1 = res,
      err => console.log(err)
      , () => {
        // console.log(this.models1);
      });
  }

  getcat(ev:any){
   this._Router.navigate(['dmstart/dmmainrepo',ev.catid]);
  }

}
