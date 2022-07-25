import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionStorageService } from './session-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isloggedIn: boolean = false;

  constructor(private http: HttpClient,
    private sessionStorage: SessionStorageService) { }

  login(user: User) {
    const url = 'http://localhost:4000/login';
    return this.http.post(url, user).subscribe((data: any) => {
      if (data.successful){
        this.sessionStorage.setToken(data.result);
        this.isloggedIn = true;
      }
    });
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

  isUserLoggedIn(): boolean {
    return this.isloggedIn;
  }
}

interface User {
  name: string,
  email: string,
  password: string
}
