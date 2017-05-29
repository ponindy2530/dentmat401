import { SoraBaseComponent } from './../../../../sora-shared/sora-base/sora-base.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dmhome-repo10',
  templateUrl: './dmhome-repo10.component.html',
  styleUrls: ['./dmhome-repo10.component.css']
})
export class DmhomeRepo10Component extends SoraBaseComponent implements OnInit {



  ngOnInit() {
    this.datestart = "2016-10-01";
    this.dateend = "2017-09-30";
    this.hcode = "10702";

    this.api(31, this.hcode, this.datestart, this.dateend);
  }

  api(k, a, b, c) {
    this._SoraService.apiData3(k, a, b, c)
      .subscribe(res => this.models = res,
      err => console.log(err)
      , () => {
        // console.log(this.models);
      });
  }

}
