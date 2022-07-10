import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailValidatorDirective } from './directives/email-validator.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonModule } from './components/button/button.module';
import { ButtonComponent } from './components/button/button.component';



@NgModule({
  declarations: [
    EmailValidatorDirective,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ButtonModule
  ],
  exports: [
    ButtonComponent,
    FontAwesomeModule,
    EmailValidatorDirective
  ]
})
export class SharedModule { }
