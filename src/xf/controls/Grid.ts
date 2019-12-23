import XNode from "../XNode";
import Binding from "./Bind";
import { IViewAttributes } from "./View";

export interface IGridAttributes extends IViewAttributes {
    spacing?: any | Binding;
}

export default function Grid(attributes: IGridAttributes, children: XNode[]) {
    return new XNode("Grid", attributes as any, children);
}
