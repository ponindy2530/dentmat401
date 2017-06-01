import { SoraBaseComponent } from './../../../../../sora-shared/sora-base/sora-base.component';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-c-main-search',
  templateUrl: './c-main-search.component.html',
  styleUrls: ['./c-main-search.component.css']
})
export class CMainSearchComponent extends SoraBaseComponent implements OnInit {



  ngOnInit() {

  }

  @Output() onFilter = new EventEmitter();

  getfilter(ev: any) {

    this.onFilter.emit(ev.target.value)

    // if (ev.target.value.length >= 2) {
    //   this._ServiceMainService.getData4(47, this.hcode, this.datestart, this.dateend, ev.target.value)
    //     .subscribe(res => this.models = res,
    //     err => console.log(err)
    //     , () => {

    //     });
    // } else {
    //   this.models = [];
    // }


  }





}
