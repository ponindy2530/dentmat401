import { SoraBaseComponent } from './../../../../sora-shared/sora-base/sora-base.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dmin-list',
  templateUrl: './dmin-list.component.html',
  styleUrls: ['./dmin-list.component.css']
})
export class DminListComponent extends SoraBaseComponent implements OnInit {



  ngOnInit() {
    this.datestart = "2016-10-01";
    this.dateend = "2017-09-30";
    this.hcode = "10702";
    this.api(28, this.hcode, this.datestart, this.dateend);
  }

  api(k, a, b, c) {
    this._SoraService.apiData3(k, a, b, c)
      .subscribe(res => this.models = res,
      err => console.log(err)
      , () => {
        // console.log(this.models);
      });
  }

  getcat(ev: any) {
    this._Router.navigate(['dmstart/dminlistadd', ev.supid]);
  }
}
