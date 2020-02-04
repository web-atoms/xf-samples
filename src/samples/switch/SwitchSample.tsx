import AtomXFContentPage from "@web-atoms/xf-controls/dist/pages/AtomXFContentPage";
import SwitchViewModel from "./SwitchViewModel";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import XNode from "@web-atoms/core/dist/core/XNode";
import Bind from "@web-atoms/core/dist/core/Bind";

export default class SwitchSample extends AtomXFContentPage {

    public viewModel: SwitchViewModel;

    public create() {
        this.viewModel = this.resolve(SwitchViewModel);

        this.render(
            <XF.ContentPage>
                <XF.Switch isToggled = {Bind.twoWays(() => this.viewModel.switchStatus())}/>
                <XF.Label text = {Bind.twoWays(() => this.viewModel.status)}/>
                <XF.Switch onColor = "orange" thumbColor = "green" 
                    isToggled = {Bind.twoWays(() => this.viewModel.switchStatus2())}/>
                <XF.Label text = {Bind.twoWays(() => this.viewModel.status2)}/>
            </XF.ContentPage>
        );
    }
}