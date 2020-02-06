import MenuService from "../../service/menu-service/MenuService";
import CollectionViewSample from "./CollectionViewSample";
import CollectionViewHorizontalList from "./CollectionViewHorizontalSample";

export default function addCollectionViewSample(ms: MenuService) {
    const collection = ms.addGroup("Collection");
    collection.addLink("Collection View (Vertical)", CollectionViewSample);
    collection.addLink("Collection View (Horizontal)", CollectionViewHorizontalList);
}