import Bind from "@web-atoms/core/dist/core/Bind";
import XNode from "@web-atoms/core/dist/core/XNode";
import AtomContentPage from "@web-atoms/xf-controls/dist/controls/atom/AtomContentPage";
import WA from "@web-atoms/xf-controls/dist/controls/WA";
import XF from "@web-atoms/xf-controls/dist/controls/XF";
import SimpleFormViewModel from "./SimpleFormViewModel";

export default class SimpleForm extends AtomContentPage {

    public viewModel: SimpleFormViewModel;

    public create() {

        this.viewModel = this.resolve(SimpleFormViewModel);

        this.render(<XF.ContentPage padding="10">
            <WA.AtomForm>
                <WA.AtomField
                    label="Username:"
                    isRequired={true}
                    error={Bind.oneWay(() => this.viewModel.errorUsername)}>
                    <XF.Entry text={Bind.twoWays(() => this.viewModel.model.username)}/>
                </WA.AtomField>
                <WA.AtomField
                    label="Password"
                    isRequired={true}
                    error={Bind.oneWay(() => this.viewModel.errorPassword)}
                    >
                    <XF.Entry/>
                </WA.AtomField>
                <XF.Button
                    command={Bind.event((s, e) => this.viewModel.signup())}
                    text="Signup"/>
            </WA.AtomForm>
        </XF.ContentPage>);
    }

}
