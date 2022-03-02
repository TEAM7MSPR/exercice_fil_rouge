import { MaitreHotel } from "./MaitreHotel";
import { Table } from "./Table";

export class Restaurant {
  private _tables: Array<Table>;

  get tables(): Array<Table> {
    return this._tables;
  }

  constructor(nombreDeTables: number) {

    for (let i = 0; i < nombreDeTables; i++) {
      this._tables.push(new Table());
    }
  }

  public demarrerService(maitreHotel: MaitreHotel) {
    this._tables.forEach(table => {
      maitreHotel.affecterTable(table);
    })
  }
}

