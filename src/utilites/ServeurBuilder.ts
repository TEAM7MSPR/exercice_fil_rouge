import { Serveur } from "../Classes/Serveur";

export class ServeurBuilder{

    private _nom : String = " ";
    
    public build() : Serveur {
        return new Serveur(this._nom);
    }

    public nommé(nom : String){
        this._nom =nom;
        return this;
    }

}