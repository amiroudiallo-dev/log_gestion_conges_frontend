import { Component, OnInit } from '@angular/core';
import { DemandesService } from '../demandes.service';
import { Demande } from '../../../models/demande.model';

@Component({
  selector: 'app-list.demandes',
  templateUrl: './list.demandes.component.html',
  styleUrl: './list.demandes.component.scss'
})
export class ListDemandesComponent implements OnInit {

  demandes!: Demande[];
  constructor(private demandeService: DemandesService){}
  ngOnInit(): void {
      // afficher la liste des elements de la BD;
      this.demandeService.getListDemandes().subscribe({
        next: (resp: Demande[]) => {
          this.demandes = resp;
          console.log("list-demandes: ", this.demandes);
        },
        error: (error: any) => {
          console.error("Error for get list demande: ", error);
        }
      })
  }
}
