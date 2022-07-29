import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { InfoComponent } from '../info/info.component';
import { ModalWindowComponent } from '../modal-window/modal-window.component';
import { CourseCardModule } from '../course-card/course-card.module';
import { CoursesRoutingModule } from './courses-routing.module';



@NgModule({
  declarations: [
    CoursesComponent,
    InfoComponent,
  ],
  imports: [
    CommonModule, 
    SharedModule,
    CourseCardModule,
    CoursesRoutingModule
  ],
  exports: [
    CoursesComponent,    
  ]
})
export class CoursesModule { }
