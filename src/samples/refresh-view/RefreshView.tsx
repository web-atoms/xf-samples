import Bind from "@web-atoms/core/dist/core/Bind";
import Colors from "@web-atoms/core/dist/core/Colors";
import XNode from "@web-atoms/core/dist/core/XNode";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import AtomXFContentPage from "@web-atoms/xf-controls/dist/pages/AtomXFContentPage";
import RefreshViewModel from "./RefreshViewModel";

export default class RefreshView extends AtomXFContentPage {

    public viewModel: RefreshViewModel;

    public create() {
        this.viewModel = this.resolve(RefreshViewModel);
        this.render(
            <XF.ContentPage>
                <XF.RefreshView
                    refreshColor={Colors.blue}
                    isRefreshing={Bind.twoWays((x) => this.viewModel.isListRefreshing)}
                    command={Bind.event((s, e) => this.viewModel.refresh())}>
                    <XF.ListView itemsSource={Bind.oneWay(() => this.viewModel.movies.value)}>
                        <XF.ListView.itemTemplate>
                            <XF.DataTemplate>
                                <XF.ViewCell height={100}>
                                    <XF.Label
                                        text={Bind.oneWay((x) => x.data.name)}/>
                                </XF.ViewCell>
                            </XF.DataTemplate>
                        </XF.ListView.itemTemplate>
                    </XF.ListView>
                </XF.RefreshView>
            </XF.ContentPage>
        )
    }
}