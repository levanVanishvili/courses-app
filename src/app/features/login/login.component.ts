import { Component, OnInit } from '@angular/core';
import { Form, FormGroup } from '@angular/forms';
import { AuthStateFacade } from 'src/app/auth/store/auth.facade';
import { User } from 'src/app/user/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public email = '';
  public password = '';
  ngform!: FormGroup

  constructor(private authStateFacade: AuthStateFacade) { }

  ngOnInit(): void {
  }

  public login(user: User): void {
    if (this.ngform.invalid){
      return this.authStateFacade.login(user);
    }else {
      return this.authStateFacade.logout();
    }
    
  }

}
