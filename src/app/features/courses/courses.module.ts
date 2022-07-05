import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CourseCardComponent } from '../course-card/course-card.component';



@NgModule({
  declarations: [
    CoursesComponent,    
    CourseCardComponent  
  ],
  imports: [
    CommonModule, SharedModule,FontAwesomeModule
  ],
  exports: [
    CoursesComponent,    
  ]
})
export class CoursesModule { }
