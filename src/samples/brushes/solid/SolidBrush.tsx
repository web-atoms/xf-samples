import AtomXFContentPage from "@web-atoms/xf-controls/dist/pages/AtomXFContentPage";
import XNode from "@web-atoms/core/dist/core/XNode";
import XF from "@web-atoms/xf-controls/dist/clr/XF";

export default class SolidBrush extends AtomXFContentPage {

    public create() {
        this.render(<XF.ContentPage>
            <XF.Grid padding={20}>
                <XF.Frame
                    borderColor="LightGray"
                    hasShadow="True"
                    cornerRadius="12"
                    background="DarkBlue">
                </XF.Frame>
            </XF.Grid>
        </XF.ContentPage>);
    }
}
