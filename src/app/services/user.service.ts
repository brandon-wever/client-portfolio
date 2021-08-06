import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private authService: AuthenticationService
  ) { }

  public getProfile(): Observable<any> {
    return this.http.get(`${environment.serverHost}/api/profile`);
  }
}
