import Bind from "@web-atoms/core/dist/core/Bind";
import XNode from "@web-atoms/core/dist/core/XNode";
import WA from "@web-atoms/xf-controls/dist/clr/WA";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import AtomXFContentPage from "@web-atoms/xf-controls/dist/pages/AtomXFContentPage";
import RowEditorViewModel from "./RowEditorViewModel";

export default class RowEditor extends AtomXFContentPage {

    public viewModel: RowEditorViewModel;

    public create() {

        this.viewModel = this.resolve(RowEditorViewModel);

        this.render(<XF.ContentPage>
            <WA.AtomForm>
                <WA.AtomField
                    label="Id">
                    <XF.Label
                        text={Bind.oneWay(() => this.viewModel.model.id)}
                        />
                </WA.AtomField>
                <WA.AtomField
                    label="Name">
                    <XF.Entry
                        text={Bind.twoWays(() => this.viewModel.model.name)}/>
                </WA.AtomField>
                <WA.AtomField>
                    <XF.Button
                        command={Bind.event(() => this.viewModel.save())}
                        text="Save"
                        />
                </WA.AtomField>
            </WA.AtomForm>
        </XF.ContentPage>);
    }

}
