import { Table } from "./Table";

export class MaitreHotel {

  private _tables: Array<Table>;

  get tables(): Array<Table> {

    return this._tables;
  }

  constructor() {
    this._tables = new Array<Table>();
  }

  public affecterTable(table: Table) {
    this._tables.push(table);
  }
}