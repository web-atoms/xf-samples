import MenuService from "../../service/menu-service/MenuService";
import BoxView from "./BoxView";

export default function addBox(ms: MenuService) {
    const box = ms.addGroup("Box");
    box.addTabLink("Box View", BoxView);
}
