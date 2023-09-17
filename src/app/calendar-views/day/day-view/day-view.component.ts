import { Component, OnInit } from '@angular/core';
import { CustomDayName } from '../../../models/custom-day-names'
import { MonthName } from '../../../models/month-names'

@Component({
  selector: 'app-day-view',
  templateUrl: './day-view.component.html',
  styleUrls: ['./day-view.component.scss']
})
export class DayViewComponent implements OnInit {

  public currentDate: Date = new Date();
  public dayOfWeek: number;
  public dayName: string;
  public monthName: string;
  public dayNumber: number;

  constructor() { 

    
    this.dayOfWeek = this.currentDate.getDay();
    this.monthName = MonthName[this.currentDate.getMonth()];
    this.dayName = CustomDayName[this.dayOfWeek];

    this.dayNumber = this.currentDate.getDate();



  }

  ngOnInit(): void {
  }

}
