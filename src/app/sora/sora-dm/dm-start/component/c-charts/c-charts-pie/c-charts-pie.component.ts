import { SoraBaseComponent } from './../../../../../sora-shared/sora-base/sora-base.component';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-c-charts-pie',
  templateUrl: './c-charts-pie.component.html',
  styleUrls: ['./c-charts-pie.component.css']
})
export class CChartsPieComponent extends SoraBaseComponent implements OnInit, OnChanges {



  @Input() apiKey: number;

  ngOnChanges(changes: SimpleChanges): void {
    let apiId = changes['apiKey'].currentValue;
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
        let data = [];

        chartData.forEach(v => {
          data.push({ name: v.rctname, y: +v.a });
        });

        console.log(data);
        this.openCharts(data);


      });
  }

  options: object;
  openCharts(data) {
    this.options = {

      credits: {
        enabled: false
      },

      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'การเบิกใช้วัสดุ ในรพ. กับ รพสต. ปีงบประมาณ, 2559 ถึงปี, 2560'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false
          },
          showInLegend: true
        }
      },
      series: [{
        name: 'Brands',
        colorByPoint: true,
        data: data
      }]
    };
  }
}
