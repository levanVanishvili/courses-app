import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from './course-card.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ModalWindowComponent } from '../modal-window/modal-window.component';
import { ModalWindowModule } from '../modal-window/modal-window.module';



@NgModule({
  declarations: [
    CourseCardComponent,
  ],
  imports: [
    CommonModule, 
    SharedModule,
    ModalWindowModule
  ],
  exports:[
    CourseCardComponent
  ]
})
export class CourseCardModule { }
