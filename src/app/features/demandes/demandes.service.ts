import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Demande } from '../../models/demande.model';

@Injectable({
  providedIn: 'root'
})
export class DemandesService {

  API_URL: string = "http://localhost:6600"
  constructor(private httpClient: HttpClient) { }


  getListDemandes(): Observable<Demande[]> {
    return this.httpClient.get<Demande[]>(`${this.API_URL}/api/demandes`);
  }
}
