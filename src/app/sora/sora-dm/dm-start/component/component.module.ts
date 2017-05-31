import { SoraSharedModule } from './../../../sora-shared/sora-shared.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CChartsMonthComponent } from './c-charts/c-charts-month/c-charts-month.component';
import { CChartsTop10Component } from './c-charts/c-charts-top10/c-charts-top10.component';
import { CChartsPieComponent } from './c-charts/c-charts-pie/c-charts-pie.component';


@NgModule({
    imports: [
        CommonModule,
        SoraSharedModule
    ],
    declarations: [
        CChartsMonthComponent,
        CChartsTop10Component,
        CChartsPieComponent
    ],
    exports: [
        CChartsMonthComponent,
        CChartsTop10Component,
        CChartsPieComponent
    ]
})
export class ComponentModule { } 