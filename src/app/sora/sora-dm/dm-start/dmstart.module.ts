import { ComponentModule } from './component/component.module';
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
import { DmTestComponent } from './dm-test/dm-test.component';
import { VDashboardComponent } from './p-view/v-dashboard/v-dashboard.component';
import { VMainComponent } from './p-view/v-main/v-main.component';
import { VInComponent } from './p-view/v-in/v-in.component';
import { VOutComponent } from './p-view/v-out/v-out.component';

const routes: Routes = [
    {
        path: 'dmstart', component: DmStartComponent,
        children: [
            { path: 'dashboard', component: VDashboardComponent },
            { path: 'main', component: VMainComponent },
            { path: 'in', component: VInComponent },
            { path: 'out', component: VOutComponent }
        ]
    },
    { path: '', redirectTo: 'appstart', pathMatch: 'full' },
    { path: '**', redirectTo: 'appstart', pathMatch: 'full' },
];

@NgModule({
    imports: [
        CommonModule,
        SoraSharedModule,
        ComponentModule,
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
        DmTestComponent,
        VDashboardComponent,
        VMainComponent,
        VInComponent,
        VOutComponent
    ]
})
export class DmStartModule { } 