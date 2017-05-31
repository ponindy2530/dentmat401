import { SoraBaseComponent } from './../../sora-shared/sora-base/sora-base.component';
import { Component, OnInit } from '@angular/core';

declare var jQuery: any;
@Component({
  selector: 'app-dm-start',
  templateUrl: './dm-start.component.html',
  styleUrls: ['./dm-start.component.css']
})
export class DmStartComponent extends SoraBaseComponent implements OnInit {

  title: string = " ระบบจัดการ วัสดุทันตกรรม ( Dentmat V.401)";




  ngOnInit() {
    jQuery(".button-collapse").sideNav();

    this._Router.navigate(['dmstart/dmtest']);

  }



}
