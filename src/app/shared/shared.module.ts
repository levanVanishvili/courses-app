import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailValidatorDirective } from './directives/email-validator.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonModule } from './components/button/button.module';
import { ButtonComponent } from './components/button/button.component';
import { SearchModule } from './components/search/search.module';
import { FormsModule } from '@angular/forms';
import { DurationPipe } from './pipes/duration.pipe';
import { CreationDatePipe } from './pipes/creation-date.pipe';
import { StringJoinerPipe } from './pipes/string-joiner.pipe';
import { TogglePasswordDirective } from './directives/toggle-password.directive';
import { ControlErrorDirective } from './directives/control-error.directive';
import { PageNotFoundModule } from './components/page-not-found/page-not-found.module';



@NgModule({
  declarations: [
    EmailValidatorDirective,
    DurationPipe,
    CreationDatePipe,
    StringJoinerPipe,
    TogglePasswordDirective,
    ControlErrorDirective,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ButtonModule,
    SearchModule,
    FormsModule,
    PageNotFoundModule
  ],
  exports: [
    ButtonComponent,
    FontAwesomeModule,
    EmailValidatorDirective,
    SearchModule,
    DurationPipe,
    CreationDatePipe,
    StringJoinerPipe,
    TogglePasswordDirective
  ]
})
export class SharedModule { }
