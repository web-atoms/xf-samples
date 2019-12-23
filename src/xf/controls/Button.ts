import XNode from "../XNode";
import Binding from "./Binding";
import { IViewAttributes } from "./View";

export interface IButtonAttributes extends IViewAttributes {
    /**
     * Xamarin.Forms.Button.Label string
     */
    label?: string | Binding;

    command?: any;
}

export default function Button(attributes: IButtonAttributes) {
    return new XNode("Button", attributes as any, null);
}
