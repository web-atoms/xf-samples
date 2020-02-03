import XNode from "@web-atoms/core/dist/core/XNode";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import AtomXFContentPage from "@web-atoms/xf-controls/dist/pages/AtomXFContentPage";

export default class BoxView extends AtomXFContentPage {

    public create() {
        this.render(
            <XF.ContentPage>
                <XF.BoxView Color="CornflowerBlue"
                        CornerRadius="50"
                        WidthRequest="160"
                        HeightRequest="160"
                        VerticalOptions="Center"
                        HorizontalOptions="Center"/>

            </XF.ContentPage>
        );
    }
}
