import MenuService from "../../service/menu-service/MenuService";
import ToolbarItemView from "./ToolbarItemView";

export default function addToolbarItem(ms: MenuService) {
    const ti = ms.addGroup("ToolbarItem");
    ti.addTabLink("ToolbarItem", ToolbarItemView);
}
