import Bind from "@web-atoms/core/dist/core/xnode/Bind";
import XNode from "@web-atoms/core/dist/core/xnode/XNode";
import { IViewAttributes } from "./View";

export interface ICollectionViewAttributes extends IViewAttributes {
    spacing?: any | Bind;
    itemTemplate?: any;
}

const CollectionView = XNode.prepare<ICollectionViewAttributes>("CollectionView");
export default CollectionView;
