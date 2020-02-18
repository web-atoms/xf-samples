import XNode from "@web-atoms/core/dist/core/XNode";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import AtomXFContentPage from "@web-atoms/xf-controls/dist/pages/AtomXFContentPage";
import ProgressBarViewModel from "./ProgressBarViewModel";

export default class ProgressBarSample extends AtomXFContentPage {
    public viewModel: ProgressBarViewModel;

    public create() {
        this.viewModel = this.resolve(ProgressBarViewModel);
        this.render(
            <XF.ContentPage title = "Progress Bar">
                <XF.StackLayout>
                    <XF.ProgressBar progress = {0.5}/>
                    <XF.ProgressBar progress = {0.5} progressColor = "orange"/>
                </XF.StackLayout>
            </XF.ContentPage>
        );
    }
}
