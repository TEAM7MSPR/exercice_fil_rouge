import { EtatService } from "./EtatService";
import { MaitreHotel } from "./MaitreHotel";
import { Serveur } from "./Serveur";

export class Table {
  private _maitreHotel: MaitreHotel = null;
  private _serveur: Serveur = null;

  constructor() {

  }

  public affecterMaitreHotel(maitreHotel: MaitreHotel) {
    this._maitreHotel = maitreHotel;
  }
  public affecterServeur(serveur: Serveur) {
    this._serveur = serveur;
  }

  public modifierServeurAffecte(serveur: Serveur, etatService: EtatService): Boolean {
    if (etatService === EtatService.Demarre) {
      return false;
    }
    this.affecterServeur(serveur);
    return true;
  }
}