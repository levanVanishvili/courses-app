import { Component, OnInit } from '@angular/core';
import { mockedCourseList } from './mocks';
import { CourseCard } from "../course-card/course-card";
import { CoursesStoreService } from 'src/app/services/courses-store.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  public courses: CourseCard [] = [];
  public courseListIsEmpty: boolean = true;

  constructor(private coursesService: CoursesStoreService) { 
    
  }

  ngOnInit(): void {
    this.coursesService.getAllCourses().subscribe(value => {
      this.courses = value;
      console.log(this.courses, value)
    });
    this.courses.length > 1 ? this.courseListIsEmpty = false : this.courseListIsEmpty 
  }
  
  public onDeleteCard(id: string){
    alert('Are you sure you want to Delete? ');
  }

  public onEditCard(id: string) {
    alert('Are you sure you want to Edit? ');
  }
}
