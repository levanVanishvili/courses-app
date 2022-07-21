import { Component, OnInit } from '@angular/core';
import { Form, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public email = '';
  public password = '';
  ngform!: FormGroup

  constructor() { }

  ngOnInit(): void {
  }

  public login(): void {
    if (this.ngform.invalid){
      return
    }else {
      return console.log('login')
    }
    
  }

}
