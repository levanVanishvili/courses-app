import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CourseCard } from '../features/course-card/course-card';
import { CoursesService } from './courses.service';

@Injectable({
  providedIn: 'root'
})
export class CoursesStoreService {
  private courses$$ = new BehaviorSubject(this.getAllCourses);
  private isLoading$$ = new BehaviorSubject(false);
  public courses$ = this.courses$$.asObservable();
  public isLoading$ = this.isLoading$$.asObservable();

  constructor(private coursesService: CoursesService) { }

  getAllCourses() {
    return this.coursesService.getAll();
  }

  createCourse(course: CourseCard) {
    return this.coursesService.createCourse(course);
  }

  editCourse(id: string, course: CourseCard) {
    return this.coursesService.editCourse(id, course);
  }

  getCourse(id: string) {
    return this.coursesService.getCourse(id);
  }

  deleteCourse(id: string) {
    return this.coursesService.deleteCourse(id);
  }
}
