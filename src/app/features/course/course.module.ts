import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EditCourseComponent } from './edit/edit-course/edit-course.component';



@NgModule({
  declarations: [
    CourseComponent,
    EditCourseComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    CourseComponent
  ]
})
export class CourseModule { }
