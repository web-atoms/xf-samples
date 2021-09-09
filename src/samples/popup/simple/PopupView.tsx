import Bind from "@web-atoms/core/dist/core/Bind";
import Colors from "@web-atoms/core/dist/core/Colors";
import XNode from "@web-atoms/core/dist/core/XNode";
import RgPluginsPopup from "@web-atoms/xf-controls/dist/clr/RgPluginsPopup";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import AtomXFPopupPage from "@web-atoms/xf-controls/dist/pages/AtomXFPopupPage";

export default class PopupView extends AtomXFPopupPage {

    public create() {
        this.render(
            <RgPluginsPopup.PopupPage title="Popup Sample">

                    <XF.StackLayout padding="20"
                        backgroundColor={Colors.white}
                        horizontalOptions="Center"
                        verticalOptions="Center">
                        <XF.Label text="Label 1" />
                        <XF.Label text="Label 2" />
                        <XF.Label text="Label 3" />
                        <XF.Button
                            text="Close"
                            command={Bind.event(() => this.viewModel.close("Closed"))}
                            />
                    </XF.StackLayout>
            </RgPluginsPopup.PopupPage>
        );
    }
}
