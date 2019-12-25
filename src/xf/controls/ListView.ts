import Bind from "@web-atoms/core/dist/core/xnode/Bind";
import XNode from "@web-atoms/core/dist/core/xnode/XNode";
import { IViewAttributes } from "./View";

export interface IListViewAttributes extends IViewAttributes {
    spacing?: any | Bind;
    itemTemplate?: any;
}

export default function ListView(attributes: IListViewAttributes, children: XNode[]) {
    return new XNode("ListView", attributes as any, children);
}
