import Binding from "./controls/Binding";
import XNode, { IKeyValuePair } from "./XNode";

type Partial<T> = {
    [P in keyof T]?: T[P] | Binding;
};

// tslint:disable-next-line: class-name
export default class Document {

    public static prepare<T>(n: any): ((attributes: Partial<T>, ... nodes: XNode[]) => XNode) {
        return (attributes: Partial<T>, ... nodes: XNode[]) => {
            return new XNode(n, attributes as any, nodes);
        };
    }

    public static createElement(
        name: string | ((p: IKeyValuePair) => XNode),
        attributes: IKeyValuePair,
        ... children: Array<XNode | XNode[] | any>): XNode {
        if (typeof name === "function") {
            if (children) {
                attributes = attributes || {};
                (attributes as any).children = children;
            }
            return name(attributes);
        }
        return new XNode(name, attributes, children);
    }
}
