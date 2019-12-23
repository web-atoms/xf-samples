import { IClassOf } from "@web-atoms/core/dist/core/types";
import { AtomXFControl } from "@web-atoms/core/dist/xf/controls/AtomXFControl";
import XNode from "../XNode";

export interface IViewAttributes {
    with?: IClassOf<AtomXFControl>;
    backgroundColor?: any;
}

export default function View(attributes?: IViewAttributes) {
    return new XNode("View", attributes as any, null);
}
