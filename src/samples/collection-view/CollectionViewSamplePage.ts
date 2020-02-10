import MenuService from "../../service/menu-service/MenuService";
import GroupingSample from "./grouping/GroupingSample";
import HeaderFooterSample from "./header-footer/HeaderFooterSample";
import HorizontalGridSample from "./horizontal-grid/HorizontalGridSample";
import HorizontalListSample from "./horizontal-list/HorizontalListSample";
import VerticalGridSample from "./vertical-grid/VerticalGridSample";
import VerticalListSample from "./vertical-list/VerticalListSample";

export default function addCollectionViewSample(ms: MenuService) {
    const collection = ms.addGroup("Collection");
    collection.addLink("Vertical List", VerticalListSample);
    collection.addLink("Horizontal List", HorizontalListSample);
    collection.addLink("Vertical Grid", VerticalGridSample);
    collection.addLink("Horizontal Grid", HorizontalGridSample);
    collection.addLink("Header & Footer", HeaderFooterSample);
    collection.addLink("Grouping", GroupingSample);
}
