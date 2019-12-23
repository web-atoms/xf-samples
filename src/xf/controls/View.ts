import XNode from "../XNode";

export interface IViewAttributes {
    backgroundColor?: any;
}

export default function View(attributes?: IViewAttributes) {
    return new XNode("View", attributes as any, null);
}
