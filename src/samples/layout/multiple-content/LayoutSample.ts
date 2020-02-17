import MenuService from "../../../service/menu-service/MenuService";
import AbsoluteLayoutView from "./absolute-layout/AbsoluteLayoutView";
import FlexLayoutView from "./flex-layout/FlexLayoutView";
import GridView from "./grid-layout/GridView";
import StackLayoutView from "./stack-layout/StackLayoutView";

export default function addLayoutSample(ms: MenuService) {
    const layout = ms.addGroup("Layout");
    layout.addLink("Absolute Layout", AbsoluteLayoutView);
    layout.addLink("StackLayout", StackLayoutView);
    layout.addLink("Grid", GridView);
    layout.addLink("Flex Layout", FlexLayoutView);
}
