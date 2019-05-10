import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DashboardLayoutModule } from '@syncfusion/ej2-angular-layouts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
