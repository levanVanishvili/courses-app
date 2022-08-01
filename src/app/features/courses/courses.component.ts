import { Component, OnInit } from '@angular/core';
import { mockedCourseList } from './mocks';
import { CourseCard } from "../course-card/course-card";
import { CoursesStoreService } from 'src/app/services/courses-store.service';
import {Router } from '@angular/router';
import { CoursesStateFacade } from 'src/app/store/courses/courses.facade';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  public courses: CourseCard [] = [];
  public courseListIsEmpty: boolean = false;

  constructor(
    private coursesService: CoursesStoreService, 
    private router: Router,
    private coursesStateFacade: CoursesStateFacade) { 
    
  }

  ngOnInit(): void {
    /* this.coursesService.getAllCourses().subscribe(response => {
      this.courses = response;
    }); */
    this.courses = this.coursesStateFacade.getAllCourses() as unknown as CourseCard[];
    this.courses.length > 1 ? this.courseListIsEmpty = false : this.courseListIsEmpty 
  }
  
  public onDeleteCard(id: string) {
    //this.coursesService.deleteCourse(id);
    this.coursesStateFacade.deleteCourse(id);
    
    this.router.navigateByUrl('/courses');
  }

  public onEditCard(id: string) {
    this.router.navigate(['/courses/edit', id]);
  }
}
