import Bind from "@web-atoms/core/dist/core/Bind";
import XNode from "@web-atoms/core/dist/core/XNode";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import AtomXFContentPage from "@web-atoms/xf-controls/dist/pages/AtomXFContentPage";
import AtomXFToggleButtonBar from "@web-atoms/xf-controls/dist/toggle-button-bar/AtomXFToggleButtonBar";
import ToggleButtonBarViewModel from "./ToggleButtonBarViewModel";

export default class ToggleButtonBar extends AtomXFContentPage {

    public viewModel: ToggleButtonBarViewModel;

    public create() {

        this.viewModel = this.resolve(ToggleButtonBarViewModel);

        this.render(
            <XF.ContentPage>
                <XF.StackLayout>
                    <AtomXFToggleButtonBar
                        items={this.viewModel.genderList}
                        value={Bind.twoWays(() => this.viewModel.gender)}
                        />
                    <XF.Label
                        text={Bind.oneWay(() => `Selected gender is ${this.viewModel.gender}`)}
                        />
                </XF.StackLayout>
            </XF.ContentPage>
        );
    }

}
