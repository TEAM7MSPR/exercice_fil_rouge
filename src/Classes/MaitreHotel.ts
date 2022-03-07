import { Table } from "./Table";

export class MaitreHotel {

  private _tables: Array<Table>;
  private _nom: String;

  constructor(nom : String ) {
    this._tables = new Array<Table>();
    this._nom = nom;
  }

  get tables(): Array<Table> {
    return this._tables;
  }

  public affecterTable(table: Table) {
    this._tables.push(table);
  }
}