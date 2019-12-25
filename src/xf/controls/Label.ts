import XNode from "../XNode";
import Bind from "./Bind";
import { IViewAttributes } from "./View";

export interface ILabelAttributes extends IViewAttributes {
    text?: string | Bind;
}

export default function Label(attributes: ILabelAttributes) {
    return new XNode("Label", attributes as any, null);
}
