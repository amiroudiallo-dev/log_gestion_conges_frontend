import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemandesService {

  API_URL: string = "http://localhost:6600"
  constructor(private httpClient: HttpClient) { }


  getListDemandes(): Observable<any> {
    return this.httpClient.get<any>(`${this.API_URL}/api/demandes`);
  }
}
