import Bind from "@web-atoms/core/dist/core/Bind";
import XNode from "@web-atoms/core/dist/core/XNode";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import AtomXFContentPage from "@web-atoms/xf-controls/dist/pages/AtomXFContentPage";
import AlertSample from "../../../alert/AlertSample";
import List from "../../../list/list-view/List";
import FrameSampleViewModel from "./FrameSampleViewModel";

export default class FrameSample extends AtomXFContentPage {
    public viewModel: FrameSampleViewModel;

    public create() {
        this.render(
            <XF.ContentPage>
                <XF.Button text = "Open Page"
                    command = {Bind.event(() => { this.viewModel.changeFrame(); })}/>
                <XF.StackLayout>
                    <XF.Frame source = {AlertSample}>
                    </XF.Frame>
                </XF.StackLayout>
            </XF.ContentPage>
        );
    }
}
