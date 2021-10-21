import Bind from "@web-atoms/core/dist/core/Bind";
import XNode, { RootObject } from "@web-atoms/core/dist/core/XNode";
import WA from "@web-atoms/xf-controls/dist/clr/WA";
import X from "@web-atoms/xf-controls/dist/clr/X";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import AtomXFContentPage from "@web-atoms/xf-controls/dist/pages/AtomXFContentPage";
import SimpleFormViewModel from "./SimpleFormViewModel";

const NSXF = XNode.namespace("Xamarin.Forms", "Xamarin.Forms.Core");

@NSXF("TemplateBinding")
class TemplateBinding extends RootObject {

    public path: string;

}

const XF2 = {
    TemplateBinding
};

export default class SimpleForm extends AtomXFContentPage {

    public viewModel: SimpleFormViewModel;

    public create() {

        this.viewModel = this.resolve(SimpleFormViewModel);

        this.render(<XF.ContentPage title="Simple Form" backgroundColor="White" padding="10">
            <WA.AtomForm>
                <WA.AtomField
                    label="Username:"
                    isRequired={true}
                    error={Bind.oneWay(() => this.viewModel.errorUsername)}
                    help="Username should only be alpha/numeric and cannot contain space or any special character"
                    labelColor="#2e2e2e">
                    <WA.AtomEntry
                        automationId="username"
                        text={Bind.twoWays(() => this.viewModel.model.username)}
                        placeholderColor="#aaa"
                        textColor="#2e2e2e"/>
                </WA.AtomField>
                <WA.AtomField
                    label="Password"
                    isRequired={true}
                    error={Bind.oneWay(() => this.viewModel.errorPassword)}
                    labelColor="#2e2e2e"
                    >
                    <XF.Entry
                        automationId="password"
                        isPassword={true}
                        text={Bind.twoWays(() => this.viewModel.model.password)}
                        placeholder="Enter Password"
                        placeholderColor="#aaa"
                        textColor="#2e2e2e"
                    />
                </WA.AtomField>
                <XF.Button
                    automationId="signup"
                    command={Bind.event((s, e) => this.viewModel.signup())}
                    text="Signup"
                    borderRadius="5"
                    backgroundColor="#ff5733"
                    borderColor="#ff5733"
                    textColor="white"/>
            </WA.AtomForm>
        </XF.ContentPage>);
    }

}
