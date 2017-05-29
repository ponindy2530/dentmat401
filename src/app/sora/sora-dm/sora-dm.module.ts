import { DmStartModule } from './dm-start/dmstart.module';
import { SoraSharedModule } from './../sora-shared/sora-shared.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';



@NgModule({
    imports: [
        CommonModule,
        DmStartModule,
        SoraSharedModule.forRoot()
    ],
    declarations: []
})
export class SoraDmModule { } 