import { SoraBaseComponent } from './../../../../../sora-shared/sora-base/sora-base.component';
import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-c-main-cat',
  templateUrl: './c-main-cat.component.html',
  styleUrls: ['./c-main-cat.component.css']
})
export class CMainCatComponent extends SoraBaseComponent implements OnInit {


  ngOnInit() {
    let apiId = 34;
    this.getData(apiId);
  }

  getData(apiId) {
    this._SoraService.apiData(apiId)
      .subscribe(res => this.models = res,
      err => console.log(err)
      , () => {
        // console.log(this.models);

      });
    this.loading = false;
  }

  @Output() gettocat = new EventEmitter();
  getcat(ev: any) {
    let catId = ev.catid;
    this.gettocat.emit(catId);
  }




}
