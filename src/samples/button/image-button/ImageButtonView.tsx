import Bind from "@web-atoms/core/dist/core/Bind";
import XNode from "@web-atoms/core/dist/core/XNode";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import AtomXFContentPage from "@web-atoms/xf-controls/dist/pages/AtomXFContentPage";
import ButtonViewModel from "../ButtonViewModel";

export default class ImageButtonView extends AtomXFContentPage {

    public viewModel: ButtonViewModel;

    public create() {
        this.viewModel = this.resolve(ButtonViewModel);
        this.render(
            <XF.ContentPage title="Image Button">
                <XF.StackLayout>
                    <XF.Label text="Image button"
                        fontSize={50}
                        fontAttributes="Bold"
                        horizontalOptions="Center" />
                    <XF.ImageButton
                        margin={50}
                        padding={10}
                        source="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Xamarin-logo.svg/1920px-Xamarin-logo.svg.png"
                        command={Bind.event((s, e) => this.viewModel.clickEvent("Image-button"))}
                        />
                </XF.StackLayout>
            </XF.ContentPage>
        );
    }
}
