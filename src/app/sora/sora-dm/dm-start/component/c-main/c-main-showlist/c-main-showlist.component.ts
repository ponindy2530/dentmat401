import { SoraBaseComponent } from './../../../../../sora-shared/sora-base/sora-base.component';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
declare var jQuery: any;
@Component({
  selector: 'app-c-main-showlist',
  templateUrl: './c-main-showlist.component.html',
  styleUrls: ['./c-main-showlist.component.css']
})
export class CMainShowlistComponent extends SoraBaseComponent implements OnChanges {




  @Input() showProduct: any;

  ngOnChanges() {
    this.api1(27, this.hcode, this.datestart, this.dateend, this.showProduct.mid);
  }


  api1(k, a, b, c, d) {
    this._SoraService.apiData4(k, a, b, c, d)
      .subscribe(res => this.models1 = res,
      err => console.log(err)
      , () => {
        // console.log(this.models1);
      });
  }


  doCancel() {
    jQuery('#modal1').modal('close');
  }

}
