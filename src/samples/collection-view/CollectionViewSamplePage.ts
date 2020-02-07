import MenuService from "../../service/menu-service/MenuService";
import CollectionViewSample, { CollectionViewHorizontalList, GroupingSample, HeaderFooterSample,
    HorizontalGridSample, VerticalGridSample } from "./CollectionViewSample";

export default function addCollectionViewSample(ms: MenuService) {
    const collection = ms.addGroup("Collection");
    collection.addLink("Vertical List", CollectionViewSample);
    collection.addLink("Horizontal List", CollectionViewHorizontalList);
    collection.addLink("Vertical Grid", VerticalGridSample);
    collection.addLink("Horizontal Grid", HorizontalGridSample);
    collection.addLink("Header & Footer", HeaderFooterSample);
    collection.addLink("Grouping", GroupingSample);
}
