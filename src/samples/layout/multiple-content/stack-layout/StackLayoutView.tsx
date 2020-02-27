import XNode from "@web-atoms/core/dist/core/XNode";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import AtomXFContentPage from "@web-atoms/xf-controls/dist/pages/AtomXFContentPage";

export default class StackLayoutView extends AtomXFContentPage {

    public create() {
        this.render(
            <XF.ContentPage title="Stack Layout Sample">
                <XF.StackLayout horizontalOptions="Center">
                    <XF.StackLayout orientation="Horizontal"
                        margin={20}>
                        <XF.Label text="Example"></XF.Label>
                        <XF.Label text="Of"></XF.Label>
                        <XF.Label text="Horizontal"></XF.Label>
                    </XF.StackLayout>
                    <XF.StackLayout orientation="Vertical"
                        margin={20}>
                        <XF.Label text="Example"></XF.Label>
                        <XF.Label text="Of"></XF.Label>
                        <XF.Label text="Vertical"></XF.Label>
                    </XF.StackLayout>
                </XF.StackLayout>
            </XF.ContentPage>
        );
    }
}
