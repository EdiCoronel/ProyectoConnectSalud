import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthStateService {
  private isLoggedIn: boolean = false;


  constructor() {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      this.isLoggedIn = true;
    }
  }

  setLoggedIn(value: boolean) {
    this.isLoggedIn = value;
    if (value) {
      localStorage.setItem('currentUser', 'true');
    } else {
      localStorage.removeItem('currentUser');
    }
  }

  isUserLoggedIn(): boolean {
    return this.isLoggedIn;
  }

}
