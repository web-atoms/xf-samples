import { StringHelper } from "@web-atoms/core/dist/core/StringHelper";
import WebImage from "@web-atoms/core/dist/core/WebImage";
import Encoder from "./Encoder";
import IStyleDeclaration from "./IStyleDeclaration";

const encoder = Encoder("entity");

export interface IStyleSheet {
    [key: string]: IStyleDeclaration;
}

export default class StyleHelper {

    public static styleToCSS(model: IStyleSheet): string {
        const styles: Array<[string, string]> = [];
        for (const key in model) {
            if (model.hasOwnProperty(key)) {
                const element = model[key];
                if (element === null || element === undefined) {
                    continue;
                }
                if (element === "") {
                    continue;
                }
                styles.push([ key, StyleHelper.styleToString(null, element) ]);
            }
        }
        if (!styles.length) {
            return undefined;
        }
        return `${styles.map(([key, value]) => `${key} { ${value} }` ).join("\r\n")}`;
    }

    public static styleToString(props: IStyleDeclaration): string;
    public static styleToString(style: string, props?: IStyleDeclaration): string;
    public static styleToString(style: string | IStyleDeclaration, props?: IStyleDeclaration): string {
        const styles: string[] = [];

        if (typeof style === "string") {
            styles.push(style);
        } else {
            if (style && typeof style === "object") {
                props = style;
            }
        }

        if (props) {
            for (const key in props) {
                if (props.hasOwnProperty(key)) {
                    const element = props[key];
                    if (key === "subclasses") {
                        const r = StyleHelper.styleToCSS(element);
                        if (r !== undefined) {
                            styles.push(r);
                        }
                        continue;
                    }
                    if (element === null || element === undefined) {
                        continue;
                    }
                    const keyName = StringHelper.fromCamelToHyphen(key);
                    const encoded = encoder.htmlEncode(element.toString(), false);
                    if (element instanceof WebImage) {
                        styles.push(`${keyName}: "url(${encoded})"`);
                        continue;
                    }
                    styles.push(`${keyName}: ${encoded}`);
                }
            }
        }

        if (styles.length === 0) {
            return undefined;
        }

        return styles.join("; ");
    }

}
