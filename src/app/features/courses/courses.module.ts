import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CourseCardComponent } from '../course-card/course-card.component';
import { InfoComponent } from '../info/info.component';
import { CommonButtonComponent } from '../common-button/common-button.component';
import { ModalWindowComponent } from '../modal-window/modal-window.component';



@NgModule({
  declarations: [
    CoursesComponent,    
    CourseCardComponent,
    InfoComponent,
    CommonButtonComponent,
    ModalWindowComponent
  ],
  imports: [
    CommonModule, SharedModule, FontAwesomeModule
  ],
  exports: [
    CoursesComponent,    
  ]
})
export class CoursesModule { }
