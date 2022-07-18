import { Component, OnInit } from '@angular/core';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public email = '';
  public password = '';
  faEye = faEye
  faEyeSlash = faEyeSlash

  constructor() { }

  ngOnInit(): void {
  }

  public login(): void {
  }

}
