import { IClassOf } from "@web-atoms/core/dist/core/types";
import Bind from "@web-atoms/core/dist/core/xnode/Bind";
import XNode from "@web-atoms/core/dist/core/xnode/XNode";
import { AtomXFControl } from "@web-atoms/core/dist/xf/controls/AtomXFControl";

export interface IViewAttributes {
    with?: IClassOf<AtomXFControl>;
    backgroundColor?: any;
    [key: string]: any;
}

export default function View(attributes?: IViewAttributes) {
    return new XNode("View", attributes as any, null);
}
