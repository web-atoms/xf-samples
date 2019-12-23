import XNode, { IKeyValuePair } from "./XNode";

export class Document {
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

const document = new Document();
export default document;
