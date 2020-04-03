import MenuService from "../../../service/menu-service/MenuService";
import AbsoluteLayoutView from "./absolute-layout/AbsoluteLayoutView";
import FlexLayoutView from "./flex-layout/FlexLayoutView";
import GridView from "./grid-layout/GridView";
import StackLayoutView from "./stack-layout/StackLayoutView";

export default function addLayoutSample(ms: MenuService) {
    const layout = ms.addGroup("Layout");
    layout.addTabLink("Absolute Layout", AbsoluteLayoutView);
    layout.addTabLink("StackLayout", StackLayoutView);
    layout.addTabLink("Grid", GridView);
    layout.addTabLink("Flex Layout", FlexLayoutView);
}
