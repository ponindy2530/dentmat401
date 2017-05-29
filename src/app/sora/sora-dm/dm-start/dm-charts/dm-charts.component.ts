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
          labels.push(v.mname);
          data.push(+v.pricenow);
        });

        // console.log(labels);
        // console.log(data);
        this.barCharts(labels, data);


      });


    this._SoraService.apiData3(39, this.hcode, this.datestart, this.dateend)
      .subscribe(res => this.models1 = res,
      err => console.log(err)
      , () => {
        console.log(this.models1);
        let chartData1 = this.models1;
        let data1 = [];

        chartData1.forEach(v => {
          data1.push(+v.a);
        });

        console.log(data1);
        this.pieCharts(data1);


      });









  }

  barCharts(labels: any, data: any) {
    this.data = {
      labels: labels,
      datasets: [
        {
          label: 'มูลค่าสินค้ามากที่สุด 10 ตัว',
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          data: data
        }
      ]
    }
  }


  pieCharts(data1:any) {
    this.data1 = {
      labels: ['การเบิกใช้วัสดุภายใน รพ.', 'การเบิกใช้วัสดุนอก รพ.สต'],
      datasets: [
        {
          data: data1,
          backgroundColor: [
            "#FF6384",
            "#36A2EB"
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB"
          ]
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
