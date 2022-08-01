import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  constructor(@Inject(Window) private window: Window,) { }

  setToken(token: string) {
    this.window.sessionStorage.setItem('key', token);
  }

  getToken() {
    return this.window.sessionStorage.getItem('key');
  }

  deleteToken() {
    this.window.sessionStorage.removeItem('key');
   }
}
