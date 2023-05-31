export interface IShow{
    noms: string;
    sum: string;
    nom_count: string;
    show_nominals(nom : string) : void;
    show_sum( s:string) : void;
    show_count( t:string) : void;
}