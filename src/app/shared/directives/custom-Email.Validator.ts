import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function customEmailvalidator(): ValidatorFn {
    return (control:AbstractControl) : ValidationErrors | null => {
        const value = control.value

        if (!value) {
            return null;
        }

        const validEmail = /[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]+/.test(value);

        return !validEmail ? {emailValidator:true} : null
    }
}