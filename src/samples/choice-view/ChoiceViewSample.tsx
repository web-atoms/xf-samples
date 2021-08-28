import Bind from "@web-atoms/core/dist/core/Bind";
import XNode from "@web-atoms/core/dist/core/XNode";
import WA from "@web-atoms/xf-controls/dist/clr/WA";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import AtomXFContentPage from "@web-atoms/xf-controls/dist/pages/AtomXFContentPage";
import countries from "../../model/countries";
import ChoiceViewSampleViewModel from "./ChoiceViewSampleViewModel";

export default class ChoiceViewSample extends AtomXFContentPage {

    public viewModel: ChoiceViewSampleViewModel;

    public create() {

        this.viewModel = this.resolve(ChoiceViewSampleViewModel);

        this.render(<XF.ContentPage>
            <XF.Grid>
                <WA.AtomForm>
                    <WA.AtomField label="Gender">
                        <WA.AtomChoiceView
                            itemsSource={["Male", "Female"]}
                            />
                    </WA.AtomField>
                    <WA.AtomField label="Country">
                        <WA.AtomChoiceView
                            searchEnabled={true}
                            search={Bind.twoWays(() => this.viewModel.search)}
                            itemsSource={Bind.oneWay(() => this.viewModel.countries)}
                            >
                            <WA.AtomChoiceView.itemTemplate>
                                <XF.DataTemplate>
                                    <XF.Label text={Bind.oneWay((x) => x.data.label)} />
                                </XF.DataTemplate>
                            </WA.AtomChoiceView.itemTemplate>
                        </WA.AtomChoiceView>
                    </WA.AtomField>
                </WA.AtomForm>
            </XF.Grid>
        </XF.ContentPage>);
    }
}
