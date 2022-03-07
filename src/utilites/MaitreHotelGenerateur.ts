import { MaitreHotelBuilder } from "./MaitreHotelBuilder";

export class ServeurGenerator{

    private maitreHotelBuilder : MaitreHotelBuilder = new MaitreHotelBuilder();

    public *generate(nombre: number){
        for (let i = 0; (i < nombre); i++) {
            yield;
            return this.maitreHotelBuilder.build();
        }
    }

    public nommés(nom : String) {
        this.maitreHotelBuilder.nommé(nom);
        return this;
    }
}