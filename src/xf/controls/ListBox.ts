import XNode from "../XNode";
import Binding from "./Bind";
import { IViewAttributes } from "./View";

export interface IListBoxAttributes extends IViewAttributes {
    spacing?: any | Binding;
    itemTemplate?: any;
}

export default function ListBox(attributes: IListBoxAttributes, children: XNode[]) {
    return new XNode("ListBox", attributes as any, children);
}
