import { Inject } from "@web-atoms/core/dist/di/Inject";
import { NavigationService } from "@web-atoms/core/dist/services/NavigationService";
import Action from "@web-atoms/core/dist/view-model/Action";
import { AtomViewModel } from "@web-atoms/core/dist/view-model/AtomViewModel";
import Load from "@web-atoms/core/dist/view-model/Load";
import SqliteService, { SqliteConnection } from "@web-atoms/storage/dist/database/sqlite/SqliteService";
import Query from "@web-atoms/storage/dist/query/Query";
import ICustomer from "./model/ICustomer";
import RowEditor from "./row-editor/RowEditor";

export default class WebSqlViewModel extends AtomViewModel {

    public rows: any[];

    public selectedRow: any = null;

    @Inject
    private sqliteService: SqliteService;

    @Inject
    private navigationService: NavigationService;

    private database: SqliteConnection;

    @Load({ init: true })
    public async loadDatabase() {
        this.database = this.sqliteService.openDatabase("db", 1.1);

        await this.database.transactionAsync(async (tx) => {
            let r = await tx.executeSqlAsync(
                "CREATE TABLE IF NOT EXISTS Customers(id INTEGER PRIMARY KEY AUTOINCREMENT,name text)", []);

            r = await tx.executeSqlAsync("SELECT * FROM Customers", []);

            this.rows = r.rows;

        });
    }

    @Action()
    public async addRow() {
        const model = await this.navigationService.openPage(RowEditor, { model: {} }) as any;
        await this.database.transactionAsync(async (tx) => {
            await tx.insertAsync("Customers", model);
            const r = await tx.executeSqlAsync("SELECT * FROM Customers", []);
            this.rows = r.rows;
        });
    }

    @Action()
    public async edit() {
        const model = await this.navigationService.openPage(RowEditor, { model: this.selectedRow }) as any;
        await this.database.transactionAsync(async (tx) => {
            const filter = Query.create ` id = ${this.selectedRow.id}`;
            await tx.updateAsync("Customers", model, filter);
            const r = await tx.executeSqlAsync("SELECT * FROM Customers", []);
            this.rows = r.rows;
        });
    }

    @Action({ confirm: "Are you sure you want to delete this?"})
    public async delete() {
        await this.database.transactionAsync(async (tx) => {
            const filter = Query.create ` id = ${this.selectedRow.id}`;
            await  tx.deleteAsync("Customers", filter);
            const r = await tx.executeSqlAsync("SELECT * FROM Customers", []);
            this.rows = r.rows;
        });
    }
}
