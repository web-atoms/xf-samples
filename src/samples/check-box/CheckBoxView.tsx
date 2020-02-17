import Bind from "@web-atoms/core/dist/core/Bind";
import XNode from "@web-atoms/core/dist/core/XNode";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import AtomXFContentPage from "@web-atoms/xf-controls/dist/pages/AtomXFContentPage";
import CheckBoxSampleViewModel from "./CheckBoxSampleViewModel";

export default class CheckBoxView extends AtomXFContentPage {

    public viewModel: CheckBoxSampleViewModel;

    public create() {
        this.viewModel = this.resolve(CheckBoxSampleViewModel);
        this.render(
            <XF.ContentPage>
                <XF.StackLayout>
                    <XF.StackLayout orientation="Horizontal">
                        <XF.CheckBox isChecked={Bind.twoWays(() => this.viewModel.isAgree)} />
                        <XF.Label text="Agree the terms and condition" verticalTextAlignment="Center" />
                    </XF.StackLayout>
                    <XF.Label text={Bind.oneWay(() => this.viewModel.isAgree ? "Agree" : "Disagree")} />
                </XF.StackLayout>
            </XF.ContentPage>
        )
    }
}
