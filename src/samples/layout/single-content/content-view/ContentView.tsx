import XNode from "@web-atoms/core/dist/core/XNode";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import AtomXFContentPage from "@web-atoms/xf-controls/dist/pages/AtomXFContentPage";

export default class ContentView extends AtomXFContentPage {

    public create() {
        this.render(
            <XF.ContentView title="Content View Sample">
                <XF.StackLayout padding={10}>
                    <XF.Label text="Item 1" />
                    <XF.Label text="Item 2" />
                    <XF.Label text="Item 3" />
                    <XF.Label text="Item 4" />
                    <XF.Label text="Item 5" />
                </XF.StackLayout>
            </XF.ContentView>
        );
    }
}
