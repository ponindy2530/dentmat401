import { SoraBaseComponent } from './../../../sora-shared/sora-base/sora-base.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dm-charts',
  templateUrl: './dm-charts.component.html',
  styleUrls: ['./dm-charts.component.css']
})
export class DmChartsComponent extends SoraBaseComponent implements OnInit {
  data: any;
  data1: any;
  options: object;
  ngOnInit() {
    this.datestart = "2016-10-01";
    this.dateend = "2017-09-30";
    this.hcode = "10702";


    this._SoraService.apiData3(31, this.hcode, this.datestart, this.dateend)
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

        console.log(labels);
        console.log(data);
        this.barCharts(data);


      });


    this._SoraService.apiData3(39, this.hcode, this.datestart, this.dateend)
      .subscribe(res => this.models1 = res,
      err => console.log(err)
      , () => {
        console.log(this.models1);
        let chartData1 = this.models1;
        let data1 = [];

        chartData1.forEach(v => {
          data1.push({ name: v.rctname, y: +v.a });
        });

        console.log(data1);
        this.pieCharts(data1);


      });









  }

  barCharts(data: any) {
    // this.data = {
    //   labels: labels,
    //   datasets: [
    //     {
    //       label: 'มูลค่าสินค้ามากที่สุด 10 ตัว',
    //       backgroundColor: '#42A5F5',
    //       borderColor: '#1E88E5',
    //       data: data
    //     }
    //   ]
    // }


    this.options = {
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
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
      },

      series: [{
        name: 'Brands',
        colorByPoint: true,
        data: data
      }],
    };


  }


  pieCharts(data1: any) {
    this.data1 = {

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
        data: data1
      }]
    };
  }

  selectData(event) {
    //event.dataset = Selected dataset
    //event.element = Selected element
    //event.element._datasetIndex = Index of the dataset in data
    //event.element._index = Index of the data in dataset
    console.log(event.dataset);

  }





}
