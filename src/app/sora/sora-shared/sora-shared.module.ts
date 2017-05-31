import { SoraService } from './sora-server';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';



import {
    DataTableModule,
    SharedModule,
    TooltipModule,
    DialogModule,
    PanelModule,
    DropdownModule,
    SplitButtonModule,
    ButtonModule,
    AutoCompleteModule,
    AccordionModule
} from 'primeng/primeng';
import {
    MdCardModule,
    MdButtonModule,
    MdCheckboxModule,
    MaterialModule,
    MdNativeDateModule
} from '@angular/material';

import { CookieService } from 'angular2-cookie/services/cookies.service';
import { SoraBaseComponent } from './sora-base/sora-base.component';
import { ChartModule } from 'angular2-highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
import * as highcharts from 'highcharts';

import 'hammerjs';




@NgModule({
    imports: [
        CommonModule,
        MdCardModule,
        MdButtonModule,
        MdCheckboxModule,
        MaterialModule,
        MdNativeDateModule,
        ChartModule
    ],
    declarations: [SoraBaseComponent],
    exports: [
        HttpModule,
        FormsModule,
        DataTableModule,
        SharedModule,
        TooltipModule,
        DialogModule,
        PanelModule,
        DropdownModule,
        SplitButtonModule,
        ButtonModule,
        AutoCompleteModule,
        ChartModule,
        AccordionModule,
        MdCardModule,
        MdButtonModule,
        MdCheckboxModule,
        MaterialModule,
        MdNativeDateModule

    ]
})


export class SoraSharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SoraSharedModule,
            providers: [
                CookieService,
                SoraService,
                { provide: HighchartsStatic, useValue: highcharts }
            ]
        };
    }
}