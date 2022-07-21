import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[appEmailValidator]',
  providers: [{    
    provide: NG_VALIDATORS,
    useExisting: EmailValidatorDirective,
    multi: true
  }
  ]
})
export class EmailValidatorDirective implements Validator {

  constructor() { }
  validate(control: AbstractControl): ValidationErrors | null {
    return customEmailvalidator()(control);
  }
}

function customEmailvalidator(): ValidatorFn {
  return (control:AbstractControl) : ValidationErrors | null => {
      const value = control.value

      if (!value) {
          return null;
      }

      const validEmail = /[a-z0-9._%+-]+@[a-z0-9.-]/.test(value);

      return !validEmail ? {emailValidator:true} : null
  }
}
