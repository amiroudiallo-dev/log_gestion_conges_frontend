import { Component, OnInit } from '@angular/core';
import { DemandesService } from '../demandes.service';

@Component({
  selector: 'app-list.demandes',
  templateUrl: './list.demandes.component.html',
  styleUrl: './list.demandes.component.scss'
})
export class ListDemandesComponent implements OnInit {

  constructor(private demandeService: DemandesService){}
  ngOnInit(): void {
      // afficher la liste des elements de la BD;
      this.demandeService.getListDemandes().subscribe({
        next: (resp: any) => {
          console.log("response: ", resp);
        },
        error: (error: any) => {
          console.error("Error for get list demande: ", error);
        }
      })
  }
}
