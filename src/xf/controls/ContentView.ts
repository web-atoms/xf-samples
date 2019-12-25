import XNode from "@web-atoms/core/dist/core/xnode/XNode";
import { IViewAttributes } from "./View";

export interface IContentViewAttributes extends IViewAttributes {
    padding?: any;
}

export default function ContentView(
    attributes: IContentViewAttributes,
    children: XNode
) {
    return new XNode("ContentView", attributes as any, [ children ]);
}
