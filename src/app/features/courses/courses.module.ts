import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CourseCardComponent } from '../course-card/course-card.component';
import { InfoComponent } from '../info/info.component';
import { ModalWindowComponent } from '../modal-window/modal-window.component';



@NgModule({
  declarations: [
    CoursesComponent,    
    CourseCardComponent,
    InfoComponent,
    ModalWindowComponent
  ],
  imports: [
    CommonModule, 
    SharedModule,
  ],
  exports: [
    CoursesComponent,    
  ]
})
export class CoursesModule { }
