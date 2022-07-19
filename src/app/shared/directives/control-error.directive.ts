import { Directive, Input, NgModule, OnInit, Optional, SkipSelf, TemplateRef, ViewContainerRef } from '@angular/core';
import { Form, FormControl, FormControlName, FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { merge } from 'rxjs';

@Directive({
  selector: '[appControlError]'
})
export class ControlErrorDirective implements OnInit {
  @Input() public appControlError!: FormControl | NgModule
  @Input() public stateMatcher!: FormControl | NgModule
  @Input() public controlName!: FormControlName;
  @Input() public elementError?: string;
  @Input() public errorsDescription ?: string;


  constructor(private templateRef: TemplateRef<any>, private vcr: ViewContainerRef,
    @SkipSelf() @Optional() private formGroupDirective:
  FormGroupDirective,
   @SkipSelf() @Optional() private ngForm: NgForm) { }

   get form() { return this.formGroupDirective? (this.formGroupDirective as FormGroupDirective).form : null; }

   public ngOnInit(): void {
    const control = this.formGroupDirective.getControl(this.controlName);

    /* merge(control.valueChanges, this.form.ngSubmit).subscribe(val => {
      this.stateMatcher(val)
    }); */
   }

  public StateMatcher(control: FormControl, form:
    FormGroupDirective | NgForm): boolean {
      console.log(control, form)
      if (control){
        return control?.dirty && control?.touched && control.errors?.['required'];
      } else {
        return  form?.dirty && form?.touched && form.errors?.['required'];
      }      
    }

}
