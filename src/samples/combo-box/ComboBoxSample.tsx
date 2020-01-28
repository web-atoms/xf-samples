import AtomXFContentPage from "@web-atoms/xf-controls/dist/pages/AtomXFContentPage";
import ToggleButtonBarViewModel from "../toggle-button-bar/simple/ToggleButtonBarViewModel";
import XNode from "@web-atoms/core/dist/core/XNode";
import Bind from "@web-atoms/core/dist/core/Bind";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import AtomXFComboBox from "@web-atoms/xf-controls/dist/combo-box/AtomXFComboBox";

export default class ComboBoxSample extends AtomXFContentPage {

    public viewModel: ToggleButtonBarViewModel;

    public create() {
        this.render(<XF.ContentPage>
            <XF.StackLayout orientation="Vertical">
                <AtomXFComboBox
                    showSearch={true}
                    items={Bind.oneWay(() => this.viewModel.genderList)}
                    value={Bind.twoWays(() => this.viewModel.gender)}
                    />
                <XF.Label
                    text={Bind.oneWay(() => this.viewModel.gender)}
                    />
            </XF.StackLayout>
        </XF.ContentPage>);
    }

}
