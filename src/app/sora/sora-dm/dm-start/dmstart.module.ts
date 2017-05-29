import { SumsPipe, SumsPipe2 } from './../../sora-shared/pipe/sums.pipe';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SoraSharedModule } from './../../sora-shared/sora-shared.module';
import { RouterModule, Routes } from '@angular/router';
import { DmStartComponent } from './dm-start.component';
import { DminRepoComponent } from './dmin/dmin-repo/dmin-repo.component';
import { DminAddComponent } from './dmin/dmin-add/dmin-add.component';
import { DmoutRepoComponent } from './dmout/dmout-repo/dmout-repo.component';
import { DmoutAddComponent } from './dmout/dmout-add/dmout-add.component';
import { DmmainRepoComponent } from './dmmain/dmmain-repo/dmmain-repo.component';
import { DmsetUserComponent } from './dmset/dmset-user/dmset-user.component';
import { DmmainListcatComponent } from './dmmain/dmmain-listcat/dmmain-listcat.component';
import { DmmainSearchComponent } from './dmmain/dmmain-search/dmmain-search.component';
import { DminListComponent } from './dmin/dmin-list/dmin-list.component';
import { DminSearchComponent } from './dmin/dmin-search/dmin-search.component';
import { DminListaddComponent } from './dmin/dmin-listadd/dmin-listadd.component';
import { DmCalculatorComponent } from './dm-calculator/dm-calculator.component';
import { DmhomeRepoComponent } from './dmhome/dmhome-repo/dmhome-repo.component';
import { DmhomeRepo10Component } from './dmhome/dmhome-repo10/dmhome-repo10.component';
import { DmhomeRepostockComponent } from './dmhome/dmhome-repostock/dmhome-repostock.component';
import { DmhomeDashboardComponent } from './dmhome/dmhome-dashboard/dmhome-dashboard.component';
import { DmhomeCompListcatComponent } from './dmhome/componnent/dmhome-comp-listcat/dmhome-comp-listcat.component';
import { DmmainAddComponent } from './dmmain/dmmain-add/dmmain-add.component';
import { DmhomeCompListsupComponent } from './dmhome/componnent/dmhome-comp-listsup/dmhome-comp-listsup.component';
import { DmChartsComponent } from './dm-charts/dm-charts.component';

const routes: Routes = [
    {
        path: 'dmstart', component: DmStartComponent,
        children: [
            { path: 'dminrepo', component: DminRepoComponent },
            { path: 'dminadd', component: DminAddComponent },
            { path: 'dmoutrepo', component: DmoutRepoComponent },
            { path: 'dmoutadd', component: DmoutAddComponent },
            { path: 'dmmainrepo/:id', component: DmmainRepoComponent },
            { path: 'dmsetuser', component: DmsetUserComponent },
            { path: 'dmmainlistcat', component: DmmainListcatComponent },
            { path: 'dmmainsearch', component: DmmainSearchComponent },
            { path: 'dminlist', component: DminListComponent },
            { path: 'dminsearch', component: DminSearchComponent },
            { path: 'dminlistadd/:id', component: DminListaddComponent },
            { path: 'dmhomerepo', component: DmhomeRepoComponent },
            { path: 'dmhomerepo10', component: DmhomeRepo10Component },
            { path: 'dmhomerepostock', component: DmhomeRepostockComponent },
            { path: 'dmhomedashboard', component: DmhomeDashboardComponent },
            { path: 'dmmainadd', component: DmmainAddComponent },
            { path: 'dmcharts', component: DmChartsComponent }
        ]
    },
    { path: '', redirectTo: 'appstart', pathMatch: 'full' },
    { path: '**', redirectTo: 'appstart', pathMatch: 'full' },
];

@NgModule({
    imports: [
        CommonModule,
        SoraSharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        DminRepoComponent,
        DmStartComponent,
        DminAddComponent,
        DmoutRepoComponent,
        DmoutAddComponent,
        DmmainRepoComponent,
        DmsetUserComponent,
        DmmainListcatComponent,
        DmmainSearchComponent,
        SumsPipe,
        SumsPipe2,
        DminListComponent,
        DminSearchComponent,
        DminListaddComponent,
        DmCalculatorComponent,
        DmhomeRepoComponent,
        DmhomeRepo10Component,
        DmhomeRepostockComponent,
        DmhomeDashboardComponent,
        DmhomeCompListcatComponent,
        DmmainAddComponent,
        DmhomeCompListsupComponent,
        DmChartsComponent
    ]
})
export class DmStartModule { } 