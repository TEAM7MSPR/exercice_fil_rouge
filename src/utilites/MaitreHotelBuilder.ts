import { MaitreHotel } from "../Classes/MaitreHotel";

export class MaitreHotelBuilder{

    private _nom : String = " ";
    
    public build() : MaitreHotel {
        return new MaitreHotel(this._nom);
    }

    public nommé(nom : String){
        this._nom =nom;
        return this;
    }

}