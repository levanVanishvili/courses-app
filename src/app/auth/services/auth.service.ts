import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionStorageService } from './session-storage.service';
import { User } from 'src/app/user/user';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthorized$$ = new BehaviorSubject(this.login);
  public isAuthorized$ = this.isAuthorized$$.asObservable();

  constructor(private http: HttpClient,
    private sessionStorage: SessionStorageService) { }

  login(user: User) {
    const url = 'http://localhost:4000/login';
    this.http.post(url, user).subscribe((data: any) => {
      if (data.successful){
        this.sessionStorage.setToken(data.result);
      }
    });
    return this.http.post(url, user);
  }

  logOut(token: string) {
    const url = 'http://localhost:4000/login';
    const headers = new HttpHeaders({'Content-Type':  'application/json','Authorization': token});
    return this.http.delete(url, {headers});
  }

  register(user: User) {
    const url = 'http://localhost:4000/register';
    return this.http.post(url, user);    
  }
}