import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonButtonComponent } from '../common-button/common-button.component';



@NgModule({
  declarations: [
    CommonButtonComponent
  ],
  imports: [
    CommonModule, SharedModule
  ],
  exports: [
  ]
})
export class InfoModule { }
