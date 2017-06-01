import { SoraBaseComponent } from './../../../../../sora-shared/sora-base/sora-base.component';
import { Component, OnInit, Input, SimpleChanges, OnChanges, Output, EventEmitter } from '@angular/core';
SoraBaseComponent
@Component({
  selector: 'app-c-main-scformlest',
  templateUrl: './c-main-scformlest.component.html',
  styleUrls: ['./c-main-scformlest.component.css']
})
export class CMainScformlestComponent extends SoraBaseComponent implements OnChanges {

  @Input() tolistform2: string;

  ngOnChanges(changes: SimpleChanges): void {
    let getText = changes['tolistform2'].currentValue;
    this.onText(getText);

  }

  onText(ev: string) {
    if (ev.length >= 2) {
      this._ServiceMainService.getData4(48, this.hcode, this.datestart, this.dateend, ev)
        .subscribe(res => this.models = res,
        err => console.log(err)
        , () => {
          // console.log(this.models);
        });

    } else {
      this.models = [];
    }
  }

  @Output() getdataformshow = new EventEmitter;
  getdatashowform(ev: any) {
    // console.log(ev);
    
    this.getdataformshow.emit(ev);
  }

}
