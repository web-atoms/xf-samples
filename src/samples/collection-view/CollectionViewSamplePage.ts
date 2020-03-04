import MenuService from "../../service/menu-service/MenuService";
import GroupingSample from "./grouping/GroupingSample";
import HeaderFooterSample from "./header-footer/HeaderFooterSample";
import HorizontalGridSample from "./horizontal-grid/HorizontalGridSample";
import HorizontalListSample from "./horizontal-list/HorizontalListSample";
import VerticalGridSample from "./vertical-grid/VerticalGridSample";
import VerticalListSample from "./vertical-list/VerticalListSample";

export default function addCollectionViewSample(ms: MenuService) {
    const collection = ms.addGroup("Collection View");
    collection.addTabLink("Vertical List", VerticalListSample);
    collection.addTabLink("Horizontal List", HorizontalListSample);
    collection.addTabLink("Vertical Grid", VerticalGridSample);
    collection.addTabLink("Horizontal Grid", HorizontalGridSample);
    collection.addTabLink("Header & Footer", HeaderFooterSample);
    collection.addTabLink("Grouping", GroupingSample);
}
