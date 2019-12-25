import Bind from "@web-atoms/core/dist/core/xnode/Bind";
import XNode from "@web-atoms/core/dist/core/xnode/XNode";
import { IViewAttributes } from "./View";

export interface ILabelAttributes extends IViewAttributes {
    text?: string | Bind;
}

export default function Label(attributes: ILabelAttributes) {
    return new XNode("Label", attributes as any, null);
}
