import { SoraBaseComponent } from './../../../../../sora-shared/sora-base/sora-base.component';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-c-out-list',
  templateUrl: './c-out-list.component.html',
  styleUrls: ['./c-out-list.component.css']
})
export class COutListComponent extends SoraBaseComponent implements OnChanges {

  @Input() apiKey;

  ngOnChanges(changes: SimpleChanges): void {
    let apiId = changes['apiKey'].currentValue
    this.getData(apiId);
  }


  getData(apiId) {
    this._SoraService.apiData3(apiId, this.hcode, this.datestart, this.dateend)
      .subscribe(res => this.models = res,
      err => console.log(err)
      , () => {
        console.log(this.models);
      });
  }

}
