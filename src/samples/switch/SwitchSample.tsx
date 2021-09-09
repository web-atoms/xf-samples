import Bind from "@web-atoms/core/dist/core/Bind";
import XNode from "@web-atoms/core/dist/core/XNode";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import AtomXFContentPage from "@web-atoms/xf-controls/dist/pages/AtomXFContentPage";
import SwitchViewModel from "./SwitchViewModel";

export default class SwitchSample extends AtomXFContentPage {

    public viewModel: SwitchViewModel;

    public create() {
        this.viewModel = this.resolve(SwitchViewModel);

        this.render(
            <XF.ContentPage title = "Switch Sample">
                <XF.StackLayout>
                    <XF.Switch isToggled = {Bind.twoWays(() => this.viewModel.status)}/>
                    <XF.Label text = {Bind.oneWay(() => this.viewModel.status ? "On" : "Off")}/>
                    <XF.Switch onColor = "orange" thumbColor = "green"
                        isToggled = {Bind.twoWays(() => this.viewModel.status2)}/>
                    <XF.Label text = {Bind.oneWay(() => this.viewModel.status2 ? "On" : "Off")}/>
                </XF.StackLayout>
            </XF.ContentPage>
        );
    }
}
