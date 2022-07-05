import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonButtonComponent } from './common-button.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    CommonButtonComponent
  ],
  imports: [
    CommonModule, SharedModule
  ],
  exports: [
    CommonButtonComponent
  ]
})
export class CommonButtonModule { }
