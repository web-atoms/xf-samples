import XNode from "@web-atoms/core/dist/core/XNode";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import AtomXFContentPage from "@web-atoms/xf-controls/dist/pages/AtomXFContentPage";
import ActivityIndicatorViewModel from "./ActivityIndicatorViewModel";

export default class ActivityIndicatorSample extends AtomXFContentPage {

    public viewModel: ActivityIndicatorViewModel;

    public create() {
        this.viewModel = this.resolve(ActivityIndicatorViewModel);

        this.render(
            <XF.ContentPage title = "Activity Indicator Sample">
                <XF.StackLayout>
                    <XF.ActivityIndicator isRunning = {true}/>
                    <XF.ActivityIndicator isRunning = {true} color = "orange"/>
                </XF.StackLayout>
            </XF.ContentPage>
        );
    }
}
