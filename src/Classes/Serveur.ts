import { EtatService } from "./EtatService";
import { Restaurant } from "./Restaurant";
import { Table } from "./Table";

export class Serveur {

    private _tables: Array<Table>;

    constructor() {
        this._tables = new Array<Table>();
    }

    get tables(): Array<Table> {
        return this._tables;
    }

    public affecterTable(table: Table) {

        table.affecterServeur(this);
        this._tables.push(table);
    }

}