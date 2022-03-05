import { MaitreHotel } from "./MaitreHotel";
import { Table } from "./Table";
import { Serveur } from "./Serveur";
import { EtatService } from "./EtatService";

export class Restaurant {

  private _tables: Array<Table>;
  private _etatService: EtatService;


  get tables(): Array<Table> {
    return this._tables;
  }

  get etatService(): EtatService {
    return this._etatService;
  }

  constructor(nombreDeTables: number) {
    this._tables = new Array<Table>();
    for (let i = 0; i < nombreDeTables; i++) {
      this._tables.push(new Table());
    }
  }

  affecterTableServeur(serveur: Serveur) {

  }
  affecterTableMaitreHotel(serveur: Serveur) {

  }



  demarrerService(maitreHotel: MaitreHotel = null, serveur: Serveur = null, tableNumber: number = 0, callback?: (e?: Error) => any) {

    this._etatService = EtatService.Demarre;

    if (tableNumber > this._tables.length) {
      callback(new Error('Ce numéro de table est impossible'))
    }

    if (serveur !== null) {
      for (let i = 0; i < this._tables.length; i++) {
        if (i === tableNumber) {
          serveur.affecterTable(this._tables[i])
        } else {
          if (maitreHotel !== null) {
            maitreHotel.affecterTable(this._tables[i]);
          }
        }
      }
    } else {
      if (maitreHotel !== null) {
        this._tables.forEach(table => {
          maitreHotel.affecterTable(table);
        });
      }
    }
  }
}

