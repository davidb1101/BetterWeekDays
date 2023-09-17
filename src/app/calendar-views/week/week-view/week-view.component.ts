import { Component, OnInit } from '@angular/core';
import { CustomDayName } from '../../../models/custom-day-names'
import { MonthName } from '../../../models/month-names'


export interface WeekDay {
  dayOfWeek: number,
  dayName: string,
}

@Component({
  selector: 'app-week-view',
  templateUrl: './week-view.component.html',
  styleUrls: ['./week-view.component.scss']
})
export class WeekViewComponent implements OnInit {
  public currentDate: Date = new Date();
  public dayOfWeek: number = 0;
  public dayName: string = "";
  public monthName: string = "";
  public dayNumber: number = 0;

  public weekDayList: WeekDay[] = Array<WeekDay>();

  constructor() {
    this.dayNumber = this.currentDate.getDay();
    for(let i = 1; i < 7; i++)
    {
      this.weekDayList.push({dayOfWeek: i, dayName: CustomDayName[i]})
    }
    this.weekDayList.push({dayOfWeek: 7, dayName: CustomDayName[0]})
    console.log(this.weekDayList);
  }

  ngOnInit(): void {
  }

}


