import { IShow } from "../interface/IShow";

export class Show_website implements IShow{
    noms!: string;
    sum!: string;
    nom_count!: string;
    show_nominals(nom : string) : void{
        this.noms = nom
    }
    show_sum( s:string) : void
    {
        this.sum = s
    }
    show_count( t:string) : void
    {
        this.nom_count =t
    }
}