
export class Contact {

    id:number;
    nom: string;
    prenom: string;
    tel: string;
    email: string;
    dateNaissance: Date

    constructor() {

    }

    toString(){
        return 'Nom = ' +this.nom + ' prenom = '+ this.prenom + ' dateNaissance = ' + this.dateNaissance + ' tel = ' + this.tel ;
    }


}