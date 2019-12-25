import Bind from "@web-atoms/core/dist/core/xnode/Bind";
import XNode from "@web-atoms/core/dist/core/xnode/XNode";
import { IViewAttributes } from "./View";

export interface IEntryAttributes extends IViewAttributes {
    value?: string | Bind;
}

export default function Entry(attributes: IEntryAttributes) {
    return new XNode("Entry", attributes as any, null);
}
