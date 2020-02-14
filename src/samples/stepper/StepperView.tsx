import Bind from "@web-atoms/core/dist/core/Bind";
import XNode from "@web-atoms/core/dist/core/XNode";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import AtomXFContentPage from "@web-atoms/xf-controls/dist/pages/AtomXFContentPage";
import StepperViewModel from "./StepperViewModel";

export default class StepperView extends AtomXFContentPage {

    public viewModel: StepperViewModel;

    public create() {
        this.viewModel = this.resolve(StepperViewModel);
        this.render(
            <XF.ContentPage>
                <XF.StackLayout margin="20">
                    <XF.Stepper maximum={360}
                            increment={30}
                            horizontalOptions="Center"
                            value={Bind.twoWays(() => this.viewModel.step)}/>
                    <XF.Label
                        horizontalOptions="Center"
                        verticalOptions="CenterAndExpand"
                        text={Bind.oneWay(() => this.viewModel.step)}/>
                </XF.StackLayout>
            </XF.ContentPage>
        );
    }
}
