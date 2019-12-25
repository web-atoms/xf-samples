import Document from "../document";
import XNode from "../XNode";
import Bind from "./Bind";
import { IViewAttributes } from "./View";

export interface ICollectionViewAttributes extends IViewAttributes {
    spacing?: any | Bind;
    itemTemplate?: any;
}

const CollectionView = Document.prepare<ICollectionViewAttributes>("CollectionView");
export default CollectionView;
