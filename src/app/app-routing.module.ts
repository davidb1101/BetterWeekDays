import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DayViewComponent } from './calendar-views/day/day-view/day-view.component';
import { WeekViewComponent } from './calendar-views/week/week-view/week-view.component';
import { MonthViewComponent } from './calendar-views/month/month-view/month-view.component';

const routes: Routes = [
  {
    path: "",
    component: DayViewComponent,
  },
  {
    path: "day-view",
    component: DayViewComponent,
  },
  {
    path: "week-view",
    component: WeekViewComponent,
  },
  {
    path: "month-view",
    component: MonthViewComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
