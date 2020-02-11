import MenuService from "../../service/menu-service/MenuService";
import TableViewSample from "./TableViewSample";

export default function addTableView(ms: MenuService) {
    const table = ms.addGroup("Table");
    table.addLink("Table View", TableViewSample);
}
