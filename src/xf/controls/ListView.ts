import XNode from "../XNode";
import Binding from "./Bind";
import { IViewAttributes } from "./View";

export interface IListViewAttributes extends IViewAttributes {
    spacing?: any | Binding;
    itemTemplate?: any;
}

export default function ListView(attributes: IListViewAttributes, children: XNode[]) {
    return new XNode("ListView", attributes as any, children);
}
