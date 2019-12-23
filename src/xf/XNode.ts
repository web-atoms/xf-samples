import Encoder from "./Encoder";
import StyleHelper from "./StyleHelper";

const encoder = Encoder("entity");

export interface IKeyValuePair {
    [key: string]: string | IKeyValuePair;
}

export function mergeStyles(a: IKeyValuePair): IKeyValuePair {
    const r = {} as IKeyValuePair;
    for (const key in a) {
        if (a.hasOwnProperty(key)) {
            const element = a[key];
            if (element === undefined || element === null) {
                continue;
            }
            if (/^style\-/i.test(key)) {
                const style = r.style || (r.style = "");
                const newStyle = `${key.substr(6)}: ${encoder.htmlEncode(element, false)};`;
                r.style = style ? `${style} ${newStyle}` : newStyle;
                continue;
            }
            if (key === "style") {
                if (r.style) {
                    r.style = `${r.style} ${element}`;
                    continue;
                }
            }
            r[key] = element;
        }
    }
    return r;
}

export default class XNode {
    constructor(
        public name: string,
        public attributes: IKeyValuePair,
        public children: XNode[] | XNode[][] | any[]) {
    }
    public toString(): string {
        if (this.name === "br") {
            return "<br/>";
        }
        let attrs: string = "";
        const attributes = mergeStyles(this.attributes);
        const name = this.name;
        const children = this.children;
        for (const key in attributes) {
            if (attributes.hasOwnProperty(key)) {
                const element = attributes[key];
                if (element === null || element === undefined) {
                    continue;
                }
                if (key === "style" && typeof element === "object") {
                    attrs += ` ${key}="${encoder.htmlEncode(StyleHelper.styleToString(element), false)}"`;
                    continue;
                }
                attrs += ` ${key}="${encoder.htmlEncode(element, false)}"`;
            }
        }
        const content: string[] = this.renderChildren(children);
        return `<${name}${attrs}>
\t${content.map((s) => s.toString().split("\n").join("\n\t")).join("\r\n")}
</${name}>`;
    }
    private renderChildren(children: any[]): string[] {
        if (!children) {
            return [];
        }
        const content: string[] = [];
        if (children) {
            for (const iterator of children) {
                if (!iterator) {
                    continue;
                }
                if (Array.isArray(iterator)) {
                    for (const child of this.renderChildren(iterator)) {
                        if (child === undefined || child === null) {
                            continue;
                        }
                        content.push(child);
                    }
                } else {
                    if (typeof iterator !== "string") {
                        content.push(iterator + "");
                        continue;
                    }
                    content.push(iterator);
                }
            }
        }
        return content;
    }
}
