import Bind from "@web-atoms/core/dist/core/Bind";
import XNode from "@web-atoms/core/dist/core/XNode";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import AtomXFContentPage from "@web-atoms/xf-controls/dist/pages/AtomXFContentPage";
import AlertSampleViewModel from "./AlertSampleViewModel";

export default class AlertSample extends AtomXFContentPage {

    public viewModel: AlertSampleViewModel;

    public create() {
        this.viewModel = this.resolve(AlertSampleViewModel);

        this.render(
            <XF.ContentPage title = "Alert Sample">
                <XF.StackLayout>
                    <XF.Button text = "Display alert"
                        command = {Bind.event((x) => x.viewModel.displayAlert())}></XF.Button>
                    <XF.Button text = "Display alert question"
                        command = {Bind.event((x) => x.viewModel.displayAlertQuestion())}></XF.Button>
                </XF.StackLayout>
            </XF.ContentPage>
        );
    }
}
