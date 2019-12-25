import XNode from "../XNode";
import Bind from "./Bind";
import { IViewAttributes } from "./View";

export interface IEntryAttributes extends IViewAttributes {
    value?: string | Bind;
}

export default function Entry(attributes: IEntryAttributes) {
    return new XNode("Entry", attributes as any, null);
}
