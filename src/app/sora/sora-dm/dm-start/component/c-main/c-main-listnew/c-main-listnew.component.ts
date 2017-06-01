import { SoraBaseComponent } from './../../../../../sora-shared/sora-base/sora-base.component';
import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-c-main-listnew',
  templateUrl: './c-main-listnew.component.html',
  styleUrls: ['./c-main-listnew.component.css']
})
export class CMainListnewComponent extends SoraBaseComponent implements  OnChanges {
  
  ngOnChanges() {
    let apiId = 49;
    this.openData(apiId);
  }


  openData(apiId) {
    this._SoraService.apiData1(apiId, this.hcode)
      .subscribe(res => this.models = res,
      err => console.log(err),
      () => {
        // console.log(this.models);
      }
      );
  }

}
