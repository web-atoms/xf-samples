import Bind from "@web-atoms/core/dist/core/Bind";
import XNode from "@web-atoms/core/dist/core/XNode";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import AtomXFComboBox from "@web-atoms/xf-controls/dist/combo-box/AtomXFComboBox";
import AtomXFContentPage from "@web-atoms/xf-controls/dist/pages/AtomXFContentPage";
import ComboBoxSampleViewModel from "./ComboBoxSampleViewModel";

export default class ComboBoxSample extends AtomXFContentPage {

    public viewModel: ComboBoxSampleViewModel;

    public create() {
        this.viewModel = this.resolve(ComboBoxSampleViewModel);
        this.render(<XF.ContentPage  title="ComboBox Sample">
            <XF.StackLayout orientation="Vertical">
                <AtomXFComboBox
                    showSearch={true}
                    searchText={Bind.twoWays(() => this.viewModel.search)}
                    items={Bind.oneWay(() => this.viewModel.countries)}
                    value={Bind.twoWays(() => this.viewModel.country)}
                    />
                <XF.Label
                    text={Bind.oneWay(() => this.viewModel.country)}
                    />
            </XF.StackLayout>
        </XF.ContentPage>);
    }

}
