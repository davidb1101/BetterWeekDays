import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DayViewComponent } from './calendar-views/day/day-view/day-view.component';
import { WeekViewComponent } from './calendar-views/week/week-view/week-view.component';
import { MonthViewComponent } from './calendar-views/month/month-view/month-view.component';

@NgModule({
  declarations: [
    AppComponent,
    DayViewComponent,
    WeekViewComponent,
    MonthViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
