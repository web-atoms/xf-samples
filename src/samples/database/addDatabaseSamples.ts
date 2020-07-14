import MenuService from "../../service/menu-service/MenuService";
import WebSqlSample from "./web-sql/WebSqlSample";

export default function addDatabaseSamples(ms: MenuService) {

    const db = ms.addGroup("Database");

    db.addTabLink("Sqlite", WebSqlSample);

}
