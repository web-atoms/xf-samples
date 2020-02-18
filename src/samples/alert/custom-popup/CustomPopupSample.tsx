import Bind from "@web-atoms/core/dist/core/Bind";
import XNode from "@web-atoms/core/dist/core/XNode";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import AtomXFContentPage from "@web-atoms/xf-controls/dist/pages/AtomXFContentPage";
import CustomPopupViewModel from "./CustomPopupViewModel";

export default class CustomPopupSample extends AtomXFContentPage {

    public viewModel: CustomPopupViewModel;

    public create() {
        this.viewModel = this.resolve(CustomPopupViewModel);
        this.render(
            <XF.ContentPage backgroundColor = "#C0808080" padding = "10,0" isVisible = {true}
                title = "Custom popup">
                <XF.AbsoluteLayout layoutFlags = "All" layoutBounds = "0,0,1,1"
                    verticalOptions = "Center" horizontalOptions = "Center">
                    <XF.StackLayout orientation = "Vertical" heightRequest = {200}
                            widthRequest = {300} backgroundColor = "White">
                        <XF.Entry margin = "20,20,20,10" placeholder = "Enter Username"
                            text = {Bind.twoWays(() => this.viewModel.userName)}></XF.Entry>
                        <XF.Entry margin = "20,0,20,0" placeholder = "Enter Password" isPassword = {true}
                            text = {Bind.twoWays(() => this.viewModel.password)}></XF.Entry>
                        <XF.Button margin = "20,0,20,0" text = "Login"
                            command = {Bind.event(() => this.viewModel.save())}></XF.Button>
                    </XF.StackLayout>
                </XF.AbsoluteLayout>
            </XF.ContentPage>
        );
    }
}
