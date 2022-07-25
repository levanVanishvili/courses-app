import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { CourseCard } from '../features/course-card/course-card';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) { }

  getAll() {
    const url = 'http://localhost:4000/courses/all';
    return this.http.get<CourseCard[]>(url);
  }

  createCourse(course: CourseCard) {
    const url = 'http://localhost:4000/courses/add';
    return this.http.post(url, course);
  }

  editCourse(id: string, course: CourseCard) {
    const url = `http://localhost:4000/courses/${id}`;
    return this.http.put(url, course);

  }

  getCourse(id: string) {
    const url = `http://localhost:4000/courses/${id}`;
    return this.http.get<CourseCard>(url);
  }

  deleteCourse(id: string) {
    const url = `http://localhost:4000/courses/${id}`;
    return this.http.delete(url);
  }
}
