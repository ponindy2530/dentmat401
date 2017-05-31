import { SoraBaseComponent } from './../../../../../sora-shared/sora-base/sora-base.component';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
SoraBaseComponent
@Component({
  selector: 'app-c-charts-month',
  templateUrl: './c-charts-month.component.html',
  styleUrls: ['./c-charts-month.component.css']
})
export class CChartsMonthComponent extends SoraBaseComponent implements OnInit, OnChanges {

  @Input() apiKey: number;


  ngOnChanges(changes: SimpleChanges): void {
    let apiId = changes['apiKey'].currentValue;
    // console.log(apiId);
    this.onCharts(apiId);
  }


  onCharts(apiId) {

    this.datestart = "2016-10-01";
    this.dateend = "2017-09-30";
    this.hcode = "10702";

    this._SoraService.apiData3(apiId, this.hcode, this.datestart, this.dateend)
      .subscribe(res => this.models = res,
      err => console.log(err)
      , () => {
        // console.log(this.models);
        let chartData = this.models;
        let categories = [];
        let _dataA: any = {};
        let _dataB: any = {};
        _dataA.name = 'รับเข้า';
        _dataB.name = 'เบิกจ่าย';
        _dataA.data = [];
        _dataB.data = [];

        chartData.forEach(v => {
          categories.push(v.monthnameshort);
          _dataA.data.push(+v.a);
          _dataB.data.push(+v.b);
        });

        // console.log(categories);
        // console.log(_dataA);
        // console.log(_dataB);
        this.openCharts(categories, _dataA, _dataB);


      });
  }


  options: object;
  openCharts(categories, _dataA, _dataB) {
    this.options = {
      credits: {
        enabled: false
      },
      chart: {
        type: 'column'
      },
      title: {
        text: 'มูลค่ารับเข้า - เบิกจ่าย ปีงบประมาณ, 2559 ถึงปี, 2560'
      },
      xAxis: {
        categories: categories,
        crosshair: true
      },
      yAxis: {
        min: 0,
        title: {
          text: 'มูลค่า (บาท)'
        }
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} บาท</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
      },
      plotOptions: {
        column: {
          pointPadding: 0.0,
          borderWidth: 0
        }
      },
      series: [_dataA, _dataB]
    }

    this.loading = false;
  }

}
