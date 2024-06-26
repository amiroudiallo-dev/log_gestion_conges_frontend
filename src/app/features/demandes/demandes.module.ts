import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemandesRoutingModule } from './demandes-routing.module';
import { ListDemandesComponent } from './list.demandes/list.demandes.component';
import { EditDemandesComponent } from './edit.demandes/edit.demandes.component';


@NgModule({
  declarations: [
    ListDemandesComponent,
    EditDemandesComponent
  ],
  imports: [
    CommonModule,
    DemandesRoutingModule
  ]
})
export class DemandesModule { }
