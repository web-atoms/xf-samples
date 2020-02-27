import MenuService from "../../service/menu-service/MenuService";
import EntryView from "./EntryView";

export default function addEntry(ms: MenuService) {
    const entry = ms.addGroup("Entry");
    entry.addLink("Entry", EntryView);
}
