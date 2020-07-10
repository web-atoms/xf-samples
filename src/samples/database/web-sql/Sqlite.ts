import { IDisposable } from "@web-atoms/core/dist/core/types";

declare var bridge;

export interface ISqlResult {
    error?: string;
    insertId?: number;
    rowsAffected?: number;
    rows?: any[];
}

export interface ISqlDatabase extends IDisposable {

    transaction(tx: (t: ISqlTransaction) => void, callback?: (error?: string) => void): void;

    transactionAsync(t: (tx: ISqlTransaction) => void): Promise<void>;
}

export interface ISqlTransaction {
    executeSql(text: string, p: any[], cb?: (r: ISqlResult) => void);

    executeSqlAsync(text: string, p: any[]): Promise<ISqlResult>;
}

export interface ISqlDatabaseService {
    openDatabase(name: string): ISqlDatabase;
}

const sqlite: ISqlDatabaseService = bridge.database;

export default sqlite;
