import XNode from "@web-atoms/core/dist/core/XNode";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import AtomXFContentPage from "@web-atoms/xf-controls/dist/pages/AtomXFContentPage";

export default class ScrollViewSample extends AtomXFContentPage {

    public create() {
        this.render(
            <XF.ContentPage>
                <XF.ScrollView>
                    <XF.StackLayout>
                        <XF.BoxView backgroundColor="Red" heightRequest={600} widthRequest={150} />
                        <XF.Entry />
                    </XF.StackLayout>
                </XF.ScrollView>
            </XF.ContentPage>
        );
    }
}
