import { SoraBaseComponent } from './../../../../../sora-shared/sora-base/sora-base.component';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-c-main-cat',
  templateUrl: './c-main-cat.component.html',
  styleUrls: ['./c-main-cat.component.css']
})
export class CMainCatComponent extends SoraBaseComponent implements OnInit, OnChanges {

  @Input() apiKey: number;


  ngOnChanges(changes: SimpleChanges): void {

    let apiId = changes['apiKey'].currentValue;

    this.getData(apiId);

  }

  getData(apiId) {
    this._SoraService.apiData(apiId)
      .subscribe(res => this.models = res,
      err => console.log(err)
      , () => {

      });
    this.loading = false;
  }




}
