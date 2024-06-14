import { Agent } from "./agent.model";

export class Demande {

  constructor(
    public id?: string,
    public agent?: Agent,
    public motif?: string,
    public dateDebut?: Date,
    public dateFin?: Date,
    public etat?: string,
  ){}
}
