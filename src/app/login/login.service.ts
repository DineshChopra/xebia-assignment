import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  readonly USERNAME = '';
  readonly PASSWORD = '';

  constructor(private router: Router) { }

  login(username: string, password: string): Observable<boolean> {
    if (this.USERNAME === username && this.PASSWORD === password) {
      return of(true);
    }
  }
}
