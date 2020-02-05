import MenuService from "../../service/menu-service/MenuService";
import CollectionViewSample from "./CollectionViewSample";

export default function addCollectionViewSample(ms: MenuService) {
    const collection = ms.addGroup("Collection");
    collection.addLink("Collection View", CollectionViewSample);
}