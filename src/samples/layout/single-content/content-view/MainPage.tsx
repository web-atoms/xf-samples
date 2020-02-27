import XNode from "@web-atoms/core/dist/core/XNode";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import AtomXFContentPage from "@web-atoms/xf-controls/dist/pages/AtomXFContentPage";
import ContentView from "./ContentView";

export default class MainPage extends AtomXFContentPage {

    public create() {
        this.render(
            <XF.ContentPage title="Content View Sample">
                <ContentView></ContentView>
            </XF.ContentPage>
        );
    }
}
