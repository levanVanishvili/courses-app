import { Component, OnInit } from '@angular/core';
import { mockedCourseList } from './mocks';
import { CourseCard } from "../course-card/course-card";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  public courses: CourseCard [] = [];

  constructor() { 
    
  }

  ngOnInit(): void {
    this.courses = mockedCourseList;
  }  
}
