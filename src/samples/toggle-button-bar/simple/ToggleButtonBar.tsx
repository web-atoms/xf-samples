import Bind from "@web-atoms/core/dist/core/Bind";
import XNode from "@web-atoms/core/dist/core/XNode";
import WA from "@web-atoms/xf-controls/dist/clr/WA";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import AtomXFContentPage from "@web-atoms/xf-controls/dist/pages/AtomXFContentPage";
import AtomXFToggleButtonBar from "@web-atoms/xf-controls/dist/toggle-button-bar/AtomXFToggleButtonBar";
import ToggleButtonBarViewModel from "./ToggleButtonBarViewModel";

export default class ToggleButtonBar extends AtomXFContentPage {

    public viewModel: ToggleButtonBarViewModel;

    public create() {

        this.viewModel = this.resolve(ToggleButtonBarViewModel);

        this.render(
            <XF.ContentPage title="Toggle Button Bar">
                <XF.StackLayout>
                    <WA.AtomButtonBar
                        itemsSource={this.viewModel.genderList}
                        selectedItem={Bind.twoWays(() => this.viewModel.gender, null, {
                            fromSource: (v) => this.viewModel.genderList.find((i) => i.value === v),
                            fromTarget: (v) => v.value
                        })}
                        >
                        <WA.AtomButtonBar.itemTemplate>
                            <XF.DataTemplate>
                                <XF.Label text={Bind.oneWay((x) => x.data.label)}/>
                            </XF.DataTemplate>
                        </WA.AtomButtonBar.itemTemplate>
                    </WA.AtomButtonBar>
                    <XF.Label
                        fontSize={20}
                        text={Bind.oneWay(() => `Selected gender is ${this.viewModel.gender}`)}
                        />
                </XF.StackLayout>
            </XF.ContentPage>
        );
    }

}
