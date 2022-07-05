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
  public courseListIsEmpty: boolean = true;

  constructor() { 
    
  }

  ngOnInit(): void {
    this.courses = mockedCourseList;
    this.courses.length > 1 ? this.courseListIsEmpty = false : this.courseListIsEmpty 
  }
  
  public onDeleteCard(id: string){
    alert('Are you sure you want to Delete? ');
  }

  public onEditCard(id: string) {
    alert('Are you sure you want to Edit? ');
  }
}
