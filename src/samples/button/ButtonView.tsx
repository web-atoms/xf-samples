import Bind from "@web-atoms/core/dist/core/Bind";
import XNode from "@web-atoms/core/dist/core/XNode";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import AtomXFContentPage from "@web-atoms/xf-controls/dist/pages/AtomXFContentPage";
import ButtonViewModel from "./ButtonViewModel";

export default class ButtonView extends AtomXFContentPage {

    public viewModel: ButtonViewModel;

    public create() {
        this.viewModel = this.resolve(ButtonViewModel);
        this.render(
            <XF.ContentPage>
                <XF.StackLayout>
                    <XF.Label text="Click the button" />
                    <XF.Button
                        text="Button Demo"
                        command={Bind.event((s, e) => this.viewModel.clickEvent("Button"))} />
                </XF.StackLayout>
            </XF.ContentPage>
        );
    }
}
