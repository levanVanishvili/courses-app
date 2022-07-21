import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  public userForm!: FormGroup;
  public submitted: boolean = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });

  }

  public get name() {
    return this.userForm.get('name');
  }

  public get email() {
    return this.userForm.get('email');
  }

  public get password() {
    return this.userForm.get('password');
  }

  onSubmit() {
    this.submitted = true;

    if (this.userForm.invalid) {
      return;
    }
    if(this.userForm.valid){
      alert('User form is valid!!')
    } 
  }

}
