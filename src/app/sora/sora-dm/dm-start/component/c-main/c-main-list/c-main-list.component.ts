import { SoraBaseComponent } from './../../../../../sora-shared/sora-base/sora-base.component';
import { Component, OnInit, OnChanges, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-c-main-list',
  templateUrl: './c-main-list.component.html',
  styleUrls: ['./c-main-list.component.css']
})
export class CMainListComponent extends SoraBaseComponent implements OnInit, OnChanges {

  @Input() apiKey: string;

  ngOnChanges(changes: SimpleChanges): void {
    let getText = changes['apiKey'].currentValue;
    this.onText(getText);

  }

  onText(ev: string) {
    if (ev.length >= 2) {
      this._ServiceMainService.getData4(47, this.hcode, this.datestart, this.dateend, ev)
        .subscribe(res => this.models = res,
        err => console.log(err)
        , () => {
          // console.log(this.models);

        });

    } else {
      this.models = [];
    }
  }

  @Output() getdatashow = new EventEmitter();
  getsearch(ev: any) {
    this.getdatashow.emit(ev);
  }
  @Output() getdataedit = new EventEmitter();
  edit(ev: any) {
    this.getdataedit.emit(ev);
  }
  selectedCar: any;

  delete(ev: any, i: number) {
    let index = this.findSelectedCarIndex();
    this.models = this.models.filter((val, i) => i != index);
  }



  findSelectedCarIndex(): number {
    return this.models.indexOf(this.selectedCar);
  }



}
