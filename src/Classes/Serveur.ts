import {Table} from "./Table";

export class Serveur{

    private _tables: Array<Table>;

    constructor() {
        this._tables = new Array<Table>();
    }

    get tables(): Array<Table> {
        return this._tables;
    }

    public affecterTable(table: Table) {
        this._tables.push(table);
    }

}