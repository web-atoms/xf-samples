import XNode from "../XNode";
import Bind from "./Bind";
import { IViewAttributes } from "./View";

export interface IListViewAttributes extends IViewAttributes {
    spacing?: any | Bind;
    itemTemplate?: any;
}

export default function ListView(attributes: IListViewAttributes, children: XNode[]) {
    return new XNode("ListView", attributes as any, children);
}
