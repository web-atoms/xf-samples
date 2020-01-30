import XNode from "@web-atoms/core/dist/core/XNode";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import AtomXFContentPage from "@web-atoms/xf-controls/dist/pages/AtomXFContentPage";

export default class LabelView extends AtomXFContentPage {

    public create() {
        this.render(
            <XF.ContentPage>
                <XF.StackLayout Margin="10,200,200,300">
                    <XF.Label Text="Label Sample"
                        HorizontalOptions="Center" />
                </XF.StackLayout>
            </XF.ContentPage>
        );
    }
}
