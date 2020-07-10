import { AtomViewModel } from "@web-atoms/core/dist/view-model/AtomViewModel";
import Load from "@web-atoms/core/dist/view-model/Load";
import sqlite, { ISqlDatabase } from "./Sqlite";

export default class WebSqlViewModel extends AtomViewModel {

    public rows: any[];

    private database: ISqlDatabase;

    @Load({ init: true })
    public async loadDatabase() {
        this.database = sqlite.openDatabase("db");

        await this.database.transactionAsync(async (tx) => {
            let r = await tx.executeSqlAsync(
                "CREATE TABLE IF NOT EXISTS LOGS(id INTEGER PRIMARY KEY AUTOINCREMENT,data text)", []);

            let a = await tx.executeSqlAsync("INSERT INTO LOGS (?)", ["a1"]);
            // tslint:disable-next-line: no-console
            console.log(`INSERT ID = ${a.insertId}`);
            a = await tx.executeSqlAsync("INSERT INTO LOGS (?)", ["a1"]);
            // tslint:disable-next-line: no-console
            console.log(`INSERT ID = ${a.insertId}`);

            r = await tx.executeSqlAsync("SELECT * FROM LOGS", []);

            this.rows = r.rows;

        });
    }
}
