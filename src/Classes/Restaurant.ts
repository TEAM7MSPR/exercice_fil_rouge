import { MaitreHotel } from "./MaitreHotel";
import { Table } from "./Table";
import { Serveur } from "./Serveur";

export class Restaurant {

  private _tables: Array<Table>;

  get tables(): Array<Table> {
    return this._tables;
  }

  constructor(nombreDeTables: number) {
    this._tables = new Array<Table>();
    for (let i = 0; i < nombreDeTables; i++) {
      this._tables.push(new Table());
    }
  }

  demarrerService(maitreHotel: MaitreHotel, serveur? : Serveur, tableNumber : number = 1, callback?: (e?: Error) => any): void {
      if (tableNumber > this._tables.length) {
        callback(new Error('Ce numéro de table est impossible'))
      }
      if(typeof serveur !== 'undefined'){
        for( let i = 0; i < this._tables.length; i++) {
          if (i === tableNumber) {
            serveur.affecterTable(this._tables[i])
          } else {
            maitreHotel.affecterTable(this._tables[i]);
          }
        }
      }else{
        this._tables.forEach(table => {
          maitreHotel.affecterTable(table);
        });
      }
    }
}

