import XNode, { IKeyValuePair } from "./XNode";

// tslint:disable-next-line: class-name
export class document {
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

export default document;
