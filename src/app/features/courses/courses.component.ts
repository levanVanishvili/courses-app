import { Component, OnInit } from '@angular/core';
import { mockedCourseList } from './mocks';
import { courseCard } from './types';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  public courseImagePath: string = '';
  public courseCards: courseCard [] = [];
  public name: string = 'Dave';

  constructor() { 
    
  }

  ngOnInit(): void {
    this.courseImagePath = './assets/images/logo.svg'
    this.courseCards = mockedCourseList;
  }

  public transDurationToHours(number: number) {
    const hoursValue = Math.floor(number / 60);
    const minutes = Math.floor(number % 60);
    const hours = hoursValue < 10? '0' + hoursValue : hoursValue;
    return  hours + ':' + minutes + ' hours';
  }
}
