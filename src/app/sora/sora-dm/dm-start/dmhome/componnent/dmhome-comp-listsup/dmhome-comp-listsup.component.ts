import { SoraBaseComponent } from './../../../../../sora-shared/sora-base/sora-base.component';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dmhome-comp-listsup',
  templateUrl: './dmhome-comp-listsup.component.html',
  styleUrls: ['./dmhome-comp-listsup.component.css']
})
export class DmhomeCompListsupComponent extends SoraBaseComponent implements OnInit {



  ngOnInit() {
    this.datestart = "2016-10-01";
    this.dateend = "2017-09-30";
    this.hcode = "10702";
    this.api2(28, this.hcode, this.datestart, this.dateend);
  }

  api2(k, a, b, c) {
    this._SoraService.apiData3(k, a, b, c)
      .subscribe(res => this.models1 = res,
      err => console.log(err)
      , () => {
        // console.log(this.models1);
      });
  }

  @Output() outsup = new EventEmitter();

  getsup(ev) {
    this.outsup.emit(ev.supid);
  }

}
