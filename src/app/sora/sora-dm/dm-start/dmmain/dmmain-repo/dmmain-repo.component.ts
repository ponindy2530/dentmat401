import { SoraBaseComponent } from './../../../../sora-shared/sora-base/sora-base.component';
import { Component, OnInit, OnDestroy } from '@angular/core';
declare var jQuery: any;
@Component({
  selector: 'app-dmmain-repo',
  templateUrl: './dmmain-repo.component.html',
  styleUrls: ['./dmmain-repo.component.css']
})
export class DmmainRepoComponent extends SoraBaseComponent implements OnInit, OnDestroy {

  id: number;
  private sub: any;


  ngOnInit() {
    this.sub = this._ActivatedRoute.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
    });


    this.datestart = "2016-10-01";
    this.dateend = "2017-09-30";
    this.hcode = "10702";
    this.api(25, this.hcode, this.datestart, this.dateend, this.id);
    // this.api(17, this.hcode, this.datestart, this.dateend);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  api(k, a, b, c, d) {
    this._SoraService.apiData4(k, a, b, c, d)
      .subscribe(res => this.models = res,
      err => console.log(err)
      , () => {
        // console.log(this.models);
      });
  }


  api1(k, a, b, c, d) {
    this._SoraService.apiData4(k, a, b, c, d)
      .subscribe(res => this.models1 = res,
      err => console.log(err)
      , () => {
        // console.log(this.models1);
      });
  }


  showProduct: any;
  getsearch(ev: any) {
    this.showProduct = ev;
    this.api1(27, this.hcode, this.datestart, this.dateend, ev.mid);
    jQuery('.modal').modal({
      dismissible: false
    });
  }

  doCancel() {
    jQuery('#modal1').modal('close');
  }

}
