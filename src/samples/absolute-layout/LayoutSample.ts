import MenuService from "../../service/menu-service/MenuService";
import GridView from "../grid/GridView";
import StackLayoutView from "../stack-layout/StackLayoutView";
import AbsoluteLayoutView from "./AbsoluteLayoutView";

export default function addLayoutSample(ms: MenuService) {
    const layout = ms.addGroup("Layout");
    layout.addLink("Absolute Layout", AbsoluteLayoutView);
    layout.addLink("StackLayout", StackLayoutView);
    layout.addLink("Grid", GridView);
}
