import XNode from "@web-atoms/core/dist/core/XNode";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import AtomXFContentPage from "@web-atoms/xf-controls/dist/pages/AtomXFContentPage";

const styleSheet = `
    .styled-label {
        padding: 10;
        color: red;
    }
`;

export default class TextStyleSheet extends AtomXFContentPage {

    public create() {

        this.render(<XF.ContentPage>
            <XF.ContentPage.resources>
                <XF.StyleSheet>{styleSheet}</XF.StyleSheet>
            </XF.ContentPage.resources>
            <XF.StackLayout>
                <XF.Label
                    text="Default Label"/>
                <XF.Label
                    styleClass="styled-label"
                    text="Styled Label"/>
            </XF.StackLayout>
        </XF.ContentPage>);
    }

}
