import { Component, OnInit } from '@angular/core';
import { mockedCourseList } from './mocks';
import { CourseCard } from "../course-card/course-card";
import { CoursesStoreService } from 'src/app/services/courses-store.service';
import {Router } from '@angular/router';

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
    private router: Router) { 
    
  }

  ngOnInit(): void {
    this.coursesService.getAllCourses().subscribe(response => {
      this.courses = response as unknown as CourseCard[];
    });
    this.courses.length > 1 ? this.courseListIsEmpty = false : this.courseListIsEmpty 
  }
  
  public onDeleteCard(id: string) {
    this.coursesService.deleteCourse(id);
    this.router.navigateByUrl('/courses');
  }

  public onEditCard(id: string) {
    this.router.navigate(['/courses/edit', id]);
  }
}
