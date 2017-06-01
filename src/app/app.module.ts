import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AppStartComponent } from './app-start/app-start.component';
import { SoraDmModule } from './sora/sora-dm/sora-dm.module';

const routes: Routes = [
  { path: '', redirectTo: '/appstart', pathMatch: 'full' },
  { path: 'appstart', component: AppStartComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    AppStartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    SoraDmModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
