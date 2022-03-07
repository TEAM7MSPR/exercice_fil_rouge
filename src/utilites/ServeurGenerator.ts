import { ServeurBuilder } from "./ServeurBuilder";

export class ServeurGenerator{

    private serveurBuilder : ServeurBuilder = new ServeurBuilder()

    public *generate(nombre: number){
        for (let i = 0; (i < nombre); i++) {
            yield;
            return this.serveurBuilder.build();
        }
    }

    public nommés(nom : String) {
        this.serveurBuilder.nommé(nom);
        return this;
    }
}