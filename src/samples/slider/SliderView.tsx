import Bind from "@web-atoms/core/dist/core/Bind";
import XNode from "@web-atoms/core/dist/core/XNode";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import AtomXFContentPage from "@web-atoms/xf-controls/dist/pages/AtomXFContentPage";
import SliderViewModel from "./SliderViewModel";

export default class SliderView extends AtomXFContentPage {

    public viewModel: SliderViewModel;

    public create() {
        this.viewModel = this.resolve(SliderViewModel);
        this.render(
            <XF.ContentPage>
                <XF.StackLayout margin="100, 100, 100, 100">
                    <XF.Slider
                        minimum={0}
                        maximum={10}
                        value={Bind.twoWays(() => this.viewModel.slide)}/>
                    <XF.Label text={Bind.oneWay(() => this.viewModel.slide)}/>
                </XF.StackLayout>
            </XF.ContentPage>
        );
    }
}
