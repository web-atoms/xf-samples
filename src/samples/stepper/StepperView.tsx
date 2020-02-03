import Bind from "@web-atoms/core/dist/core/Bind";
import XNode from "@web-atoms/core/dist/core/XNode";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import AtomXFContentPage from "@web-atoms/xf-controls/dist/pages/AtomXFContentPage";
import SliderViewModel from "../slider/SliderViewModel";

export default class StepperView extends AtomXFContentPage {

    public viewModel: SliderViewModel;

    public create() {
        this.viewModel = this.resolve(SliderViewModel);
        this.render(
            <XF.ContentPage>
                <XF.StackLayout Margin="20">
                    <XF.Stepper Maximum="360"
                            Increment="30"
                            HorizontalOptions="Center"
                            value={Bind.twoWays(() => this.viewModel.slide)}/>
                    <XF.Label
                        horizontalOptions="Center"
                        verticalOptions="CenterAndExpand"
                        text={Bind.oneWay(() => this.viewModel.slide)}/>
                </XF.StackLayout>
            </XF.ContentPage>
        );
    }
}
