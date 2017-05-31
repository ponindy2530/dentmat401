import { SoraSharedModule } from './../../../sora-shared/sora-shared.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CChartsMonthComponent } from './c-charts/c-charts-month/c-charts-month.component';
import { CChartsTop10Component } from './c-charts/c-charts-top10/c-charts-top10.component';
import { CChartsPieComponent } from './c-charts/c-charts-pie/c-charts-pie.component';
import { CLoadingComponent } from './c-loading/c-loading.component';
import { CMainCatComponent } from './c-main/c-main-cat/c-main-cat.component';
import { CMainSupComponent } from './c-main/c-main-sup/c-main-sup.component';
import { COutListComponent } from './c-out/c-out-list/c-out-list.component';



@NgModule({
    imports: [
        CommonModule,
        SoraSharedModule
    ],
    declarations: [
        CChartsMonthComponent,
        CChartsTop10Component,
        CChartsPieComponent,
        CLoadingComponent,
        CMainCatComponent,
        CMainSupComponent,
        COutListComponent
    ],
    exports: [
        CChartsMonthComponent,
        CChartsTop10Component,
        CChartsPieComponent,
        CLoadingComponent,
        CMainCatComponent,
        CMainSupComponent,
        COutListComponent
    ]
})
export class ComponentModule { } 