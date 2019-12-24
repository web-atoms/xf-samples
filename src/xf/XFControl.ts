import { App } from "@web-atoms/core/dist/App";
import { IAtomElement } from "@web-atoms/core/dist/core/types";
import { AtomXFControl } from "@web-atoms/core/dist/xf/controls/AtomXFControl";
import Binding from "./controls/Bind";
import XNode from "./XNode";

declare var bridge: any;

export default class XFControl extends AtomXFControl {

    public create() {
        if (this.element instanceof XNode) {
            this.render(this.element as XNode);
        }
    }

    protected render(node: XNode): void {
        (this as any).element = bridge.createNode(this, node, Binding, XNode, XFControl);
    }
}
