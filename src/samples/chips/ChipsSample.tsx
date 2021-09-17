import Bind from "@web-atoms/core/dist/core/Bind";
import XNode from "@web-atoms/core/dist/core/XNode";
import WA from "@web-atoms/xf-controls/dist/clr/WA";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import AtomXFContentPage from "@web-atoms/xf-controls/dist/pages/AtomXFContentPage";
import ChipsSampleViewModel from "./ChipsSampleViewModel";

export default class ChipsSample extends AtomXFContentPage {

    public viewModel: ChipsSampleViewModel;

    public create() {

        this.viewModel = this.resolve(ChipsSampleViewModel);

        this.render(<XF.ContentPage>
            <XF.Grid>
                <XF.ScrollView>
                    <WA.AtomForm>
                        <WA.AtomField
                            label="Select Mode - Strings"
                            description="Press enter/Done to add">
                            <WA.AtomChips
                                selectedItems={Bind.oneWay(() => this.viewModel.list)}
                                />
                        </WA.AtomField>
                        <WA.AtomField>
                            <XF.StackLayout
                                orientation="Horizontal"
                                { ... XF.BindableLayout.itemsSource(Bind.oneWay(() => this.viewModel.list))}
                                />
                        </WA.AtomField>
                        <WA.AtomField
                            label="Select Mode - Objects"
                            description="Click to add">
                            <WA.AtomChips
                                selectedItems={Bind.oneWay(() => this.viewModel.selectedCountries)}
                                entryMode="Search"
                                itemsSource={Bind.oneWay(() => this.viewModel.countries)}
                                search={Bind.twoWays(() => this.viewModel.search)}
                                >
                            <WA.AtomChips.itemTemplate>
                                <XF.DataTemplate>
                                    <XF.Label
                                            text={Bind.oneWay((x) => x.data.label )}
                                            />
                                </XF.DataTemplate>
                            </WA.AtomChips.itemTemplate>
                        </WA.AtomChips>
                        </WA.AtomField>
                        <WA.AtomField>
                            <XF.StackLayout
                                orientation="Horizontal"
                                { ... XF.BindableLayout.itemsSource(Bind.oneWay(() => this.viewModel.selectedCountries))}
                                >
                                <XF.BindableLayout.itemTemplate>
                                    <XF.DataTemplate>
                                        <XF.Label
                                            text={Bind.oneWay((x) => x.data.label )}
                                            />
                                    </XF.DataTemplate>
                                </XF.BindableLayout.itemTemplate>
                            </XF.StackLayout>
                        </WA.AtomField>

                        <WA.AtomField
                            label="Select Mode - Strings - Converted to Object"
                            description="Press enter/Done to add">
                            <WA.AtomChips
                                selectedItems={[]}
                                textToModel={(s) => ({ label: s}) }
                                >
                                <WA.AtomChips.itemTemplate>
                                    <XF.DataTemplate>
                                        <XF.Label text={Bind.oneWay((x) => x.data.label)}/>
                                    </XF.DataTemplate>
                                </WA.AtomChips.itemTemplate>
                            </WA.AtomChips>
                        </WA.AtomField>

                        <XF.BoxView
                            heightRequest={800}
                            widthRequest={10}
                            />

                    </WA.AtomForm>
                </XF.ScrollView>
            </XF.Grid>
        </XF.ContentPage>);
    }

}
