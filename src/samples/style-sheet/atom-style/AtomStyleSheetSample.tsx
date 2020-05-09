import Colors from "@web-atoms/core/dist/core/Colors";
import XNode from "@web-atoms/core/dist/core/XNode";
import { AtomStyle } from "@web-atoms/core/dist/web/styles/AtomStyle";
import { IStyleDeclaration } from "@web-atoms/core/dist/web/styles/IStyleDeclaration";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import AtomXFContentPage from "@web-atoms/xf-controls/dist/pages/AtomXFContentPage";
import Bind from "@web-atoms/core/dist/core/Bind";

// export it to override in derived classes
export class ComposedStyle extends AtomStyle {
    public get root(): IStyleDeclaration {
        return {
            backgroundColor: Colors.lightYellow,

            // nested sub classes
            subclasses: {

                // all labels..
                " Label": {
                    padding: 10
                },
                " .red-label": {
                    color: Colors.red
                },
                " .blue-label": {
                    color: Colors.blue
                }
            }
        };
    }
}

export default class AtomStyleSheetSample extends AtomXFContentPage {

    public preCreate() {
        // avoid rebuilding style object again and again by
        // setting it a default style
        this.defaultControlStyle = ComposedStyle;

    }

    public create() {

        this.render(<XF.ContentPage

            // apply root class name to root of this page
            styleClass={this.controlStyle.root.className}
            >

            <XF.StackLayout>
                <XF.Label
                    text="Default Label"
                    />
                <XF.Label
                    styleClass="red-label"
                    text="Red Label"
                    />
                <XF.Label
                    styleClass="blue-label"
                    text="Blue Label"
                    />
            </XF.StackLayout>

        </XF.ContentPage>);
    }

}
