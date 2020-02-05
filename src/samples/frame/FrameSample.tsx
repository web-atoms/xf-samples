import AtomXFContentPage from "@web-atoms/xf-controls/dist/pages/AtomXFContentPage";
import FrameSampleViewModel from "./FrameSampleViewModel";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import XNode from "@web-atoms/core/dist/core/XNode";
import List from "../list/list-view/List";
import Bind from "@web-atoms/core/dist/core/Bind";

export default class FrameSample extends AtomXFContentPage {
    viewModel: FrameSampleViewModel;

    public create() {
        this.render(
            <XF.ContentPage>
                <XF.Button text = "Open Page"
                    command = {Bind.event(() => {this.viewModel.changeFrame()})}/>
                <XF.StackLayout>
                    <XF.Frame>
                    </XF.Frame>
                </XF.StackLayout>
            </XF.ContentPage>
        );
    };
}