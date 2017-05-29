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
    ChartModule,
    AccordionModule
} from 'primeng/primeng';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { SoraBaseComponent } from './sora-base/sora-base.component';




@NgModule({
    imports: [
        CommonModule
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
        AccordionModule
        
    ]
})


export class SoraSharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SoraSharedModule,
            providers: [
                CookieService,
                SoraService
            ]
        };
    }
}