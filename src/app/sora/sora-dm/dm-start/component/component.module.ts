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
import { COutFormComponent } from './c-out/c-out-form/c-out-form.component';
import { COutListoutComponent } from './c-out/c-out-listout/c-out-listout.component';
import { CMainSearchComponent } from './c-main/c-main-search/c-main-search.component';
import { CMainFormComponent } from './c-main/c-main-form/c-main-form.component';
import { CMainListComponent } from './c-main/c-main-list/c-main-list.component';
import { CMainShowlistComponent } from './c-main/c-main-showlist/c-main-showlist.component';
import { CMainScformlestComponent } from './c-main/c-main-scformlest/c-main-scformlest.component';
import { CMainListnewComponent } from './c-main/c-main-listnew/c-main-listnew.component';



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
        COutListComponent,
        COutFormComponent,
        COutListoutComponent,
        CMainSearchComponent,
        CMainFormComponent,
        CMainListComponent,
        CMainShowlistComponent,
        CMainScformlestComponent,
        CMainListnewComponent
    ],
    exports: [
        CChartsMonthComponent,
        CChartsTop10Component,
        CChartsPieComponent,
        CLoadingComponent,
        CMainCatComponent,
        CMainSupComponent,
        COutListComponent,
        COutFormComponent,
        COutListoutComponent,
        CMainSearchComponent,
        CMainFormComponent,
        CMainListComponent,
        CMainShowlistComponent,
        CMainScformlestComponent,
        CMainListnewComponent

    ]
})
export class ComponentModule { } 