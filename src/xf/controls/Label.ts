import XNode from "../XNode";
import Binding from "./Binding";
import { IViewAttributes } from "./View";

export interface ILabelAttributes extends IViewAttributes {
    text?: string | Binding;
}

export default function Label(attributes: ILabelAttributes) {
    return new XNode("Label", attributes as any, null);
}
