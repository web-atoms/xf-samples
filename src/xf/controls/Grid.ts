import XNode from "../XNode";
import Bind from "./Bind";
import { IViewAttributes } from "./View";

export interface IGridAttributes extends IViewAttributes {
    spacing?: any | Bind;
}

export default function Grid(attributes: IGridAttributes, children: XNode[]) {
    return new XNode("Grid", attributes as any, children);
}
