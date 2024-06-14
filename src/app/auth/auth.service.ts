import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticateModel } from '../models/authenticate.model';
import { Observable } from 'rxjs';
import { TokenModel } from '../models/token.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_URL = "http://localhost:6600";
  TOKEN_KEY = "TOKEN_KEY";
  constructor(private http: HttpClient, private router: Router) { }

  authenticatedUser(credentials: AuthenticateModel): Observable<TokenModel>{
    return this.http.post<TokenModel>(`${this.API_URL}/api/authenticate`, credentials);
  }

  saveToken(id_token: string): void {
    localStorage.setItem(this.TOKEN_KEY, id_token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  logOut(): void {
    localStorage.clear();
    this.router.navigate(['/']);
  }
}
