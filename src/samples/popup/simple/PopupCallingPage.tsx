import Bind from "@web-atoms/core/dist/core/Bind";
import XNode from "@web-atoms/core/dist/core/XNode";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import AtomXFContentPage from "@web-atoms/xf-controls/dist/pages/AtomXFContentPage";
import PopupCallingPageViewModel from "./PopupCallingPageViewModel";

export default class PopupCallingPage extends AtomXFContentPage {

    public viewModel: PopupCallingPageViewModel;

    public create() {
        this.viewModel = this.resolve(PopupCallingPageViewModel);
        this.render(
            <XF.ContentPage title="Popup Sample">
                <XF.StackLayout>
                    <XF.Label text="Click the button"
                        fontSize={30}
                        fontAttributes="Bold"
                        horizontalOptions="Center" />
                    <XF.Button
                        margin={50}
                        padding={10}
                        text="Popup Demo"
                        command={Bind.event((s, e) => this.viewModel.clickEvent("Button"))} />
                </XF.StackLayout>
            </XF.ContentPage>
        );
    }
}
