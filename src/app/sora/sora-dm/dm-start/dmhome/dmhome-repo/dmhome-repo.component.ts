import { SoraBaseComponent } from './../../../../sora-shared/sora-base/sora-base.component';
import { Component, OnInit } from '@angular/core';
import * as _ from "lodash";
@Component({
  selector: 'app-dmhome-repo',
  templateUrl: './dmhome-repo.component.html',
  styleUrls: ['./dmhome-repo.component.css']
})
export class DmhomeRepoComponent extends SoraBaseComponent implements OnInit {



  ngOnInit() {
    this.datestart = "2016-10-01";
    this.dateend = "2017-09-30";
    this.hcode = "10702";

    this.api(1, this.hcode, this.datestart, this.dateend);
  }

  api(k, a, b, c) {
    this._SoraService.apiData3(k, a, b, c)
      .subscribe(res => this.models = _.filter(res, function (o) { return o.nexps == 1 }),
      err => console.log(err)
      , () => {
        // console.log(this.models);
      }
      );
  }

}
