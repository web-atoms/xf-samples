import MenuService from "../../../../service/menu-service/MenuService";
import ScrollViewSample from "./ScrollViewSample";

export default function addScrollView(ms: MenuService) {
    const sv = ms.addGroup("Scroll View");
    sv.addLink("Scroll View", ScrollViewSample);
}
