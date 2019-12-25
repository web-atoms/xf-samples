import Bind from "@web-atoms/core/dist/core/xnode/Bind";
import XNode from "@web-atoms/core/dist/core/xnode/XNode";
import { IViewAttributes } from "./View";

export interface IGridAttributes extends IViewAttributes {
    spacing?: any | Bind;
}

export default function Grid(attributes: IGridAttributes, children: XNode[]) {
    return new XNode("Grid", attributes as any, children);
}
