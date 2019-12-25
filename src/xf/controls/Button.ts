import Bind from "@web-atoms/core/dist/core/xnode/Bind";
import XNode from "@web-atoms/core/dist/core/xnode/XNode";
import { IViewAttributes } from "./View";

export interface IButtonAttributes extends IViewAttributes {
    /**
     * Xamarin.Forms.Button.Label string
     */
    label?: string | Bind;

    command?: any;
}

export default function Button(attributes: IButtonAttributes) {
    return new XNode("Button", attributes as any, null);
}
