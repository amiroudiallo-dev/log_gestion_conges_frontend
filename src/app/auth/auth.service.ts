import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticateModel } from '../models/authenticate.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_URL = "http://localhost:6600";
  constructor(private http: HttpClient) { }

  authenticatedUser(credentials: AuthenticateModel): Observable<any>{
    return this.http.post<AuthenticateModel>(`${this.API_URL}/api/authenticate`, credentials);
  }
}
