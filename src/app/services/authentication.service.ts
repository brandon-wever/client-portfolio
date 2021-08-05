import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../classes/user';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http: HttpClient
  ) { }

  public login(email: string, password: string): Observable<any> {
    return this.http.post(`${environment.serverHost}/api/auth/login`, { email: email, password: password });
  }
}
