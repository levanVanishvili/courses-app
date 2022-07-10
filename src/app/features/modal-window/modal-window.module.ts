import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ModalWindowComponent } from './modal-window.component';



@NgModule({
  declarations: [ModalWindowComponent],
  imports: [
    CommonModule, 
    SharedModule
  ],
  exports: [
    ModalWindowComponent
  ]
})
export class ModalWindowModule { }
