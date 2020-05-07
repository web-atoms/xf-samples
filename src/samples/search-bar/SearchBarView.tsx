import Bind from "@web-atoms/core/dist/core/Bind";
import XNode from "@web-atoms/core/dist/core/XNode";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import AtomXFContentPage from "@web-atoms/xf-controls/dist/pages/AtomXFContentPage";
import SearchBarViewModel from "./SearchBarViewModel";

export default class SearchBarView extends AtomXFContentPage {

    public viewModel: SearchBarViewModel;

    public create() {
        this.viewModel = this.resolve(SearchBarViewModel);
        this.render(
            <XF.ContentPage title="SearchBox Sample">
                <XF.StackLayout>
                    <XF.SearchBar
                        text={Bind.twoWays((x) => this.viewModel.searchText)}
                        placeholder="Search text"
                        textColor="White"
                        placeholderColor="White"
                        backgroundColor="#bbb"/>
                    <XF.ListView itemsSource={Bind.oneWay(() => this.viewModel.movies.value)}>
                        <XF.ListView.itemTemplate>
                            <XF.DataTemplate>
                                <XF.ViewCell height={100}>
                                    <XF.Label
                                        text={Bind.oneWay((x) => x.data.name)}
                                        verticalOptions="Center"
                                        textColor="Black"
                                        margin="10"/>
                                </XF.ViewCell>
                            </XF.DataTemplate>
                        </XF.ListView.itemTemplate>
                    </XF.ListView>
                </XF.StackLayout>
            </XF.ContentPage>
        );
    }
}
