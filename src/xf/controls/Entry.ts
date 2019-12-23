import XNode from "../XNode";
import Binding from "./Bind";
import { IViewAttributes } from "./View";

export interface IEntryAttributes extends IViewAttributes {
    value?: string | Binding;
}

export default function Entry(attributes: IEntryAttributes) {
    return new XNode("Entry", attributes as any, null);
}
