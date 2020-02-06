import MenuService from "../../service/menu-service/MenuService";
import MenuItemView from "./MenuItemView";

export default function addMenuItem(ms: MenuService) {
    const menuItem = ms.addGroup("MenuItem");
    menuItem.addLink("Menu Item", MenuItemView);
}
