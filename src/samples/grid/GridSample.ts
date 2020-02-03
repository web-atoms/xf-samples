import MenuService from "../../service/menu-service/MenuService";
import GridView from "./GridView";

export default function addGrid(ms: MenuService) {
    const grid = ms.addGroup("Grid");
    grid.addLink("Grid", GridView);
}
