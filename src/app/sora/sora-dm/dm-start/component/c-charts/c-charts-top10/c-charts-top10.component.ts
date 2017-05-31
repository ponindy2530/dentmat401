import { SoraBaseComponent } from './../../../../../sora-shared/sora-base/sora-base.component';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-c-charts-top10',
  templateUrl: './c-charts-top10.component.html',
  styleUrls: ['./c-charts-top10.component.css']
})
export class CChartsTop10Component extends SoraBaseComponent implements OnInit, OnChanges {


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
        let labels = [];
        let data = [];

        chartData.forEach(v => {
          labels.push({ name: v.mname, y: +v.pricenow });
          data.push({ name: v.mname, y: +v.pricenow });
        });

        // console.log(labels);
        // console.log(data);
        this.openCharts(data);


      });
  }

  options: object;
  openCharts(data: any) {
    this.options = {
      credits: {
        enabled: false
      },
      chart: {
        type: 'column'
      },
      title: {
        text: 'มูลค่าสินค้ามากที่สุด 10 ตัว. ปีงบประมาณ, 2559 ถึงปี, 2560'
      },
      xAxis: {
        type: 'category'
      },
      yAxis: {
        title: {
          text: 'มูลค่า'
        }

      },
      legend: {
        enabled: false
      },
      plotOptions: {
        series: {
          dataLabels: {
            enabled: true,
            format: '{point.y:.1f} บาท'
          }
        }
      },

      tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.0f}</b> บาท<br/>'
      },

      series: [{
        name: 'ชื่อวัสดุทันตกรรม',
        colorByPoint: true,
        data: data
      }],
    };

    this.loading = false;
  }





}
