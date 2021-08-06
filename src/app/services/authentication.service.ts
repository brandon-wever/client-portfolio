import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../classes/user';
import { environment } from '../../environments/environment';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http: HttpClient
  ) { }

  public login(email: string, password: string): Observable<any> {
    return this.http.post(`${environment.serverHost}/api/auth/login`, { email: email, password: password }).pipe(
      tap((response: any) => {
        this.storeToken(response.token);
      })
    );
  }

  public isLoggedIn(): boolean {
    return this.getToken() ? true : false;
  }

  public loggout() {
    this.clearToken();
  }

  public storeToken(token: string): void {
    localStorage.setItem('token', token);
  }

  public getToken(): string | null {
    return localStorage.getItem('token');
  }

  private clearToken(): void {
    localStorage.removeItem('token');
  }
}
