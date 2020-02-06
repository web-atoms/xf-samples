import Bind from "@web-atoms/core/dist/core/Bind";
import XNode from "@web-atoms/core/dist/core/XNode";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import AtomXFContentPage from "@web-atoms/xf-controls/dist/pages/AtomXFContentPage";
import ListViewModel from "../list/list-view/ListViewModel";

export default class MenuItemView extends AtomXFContentPage {

    public viewModel: ListViewModel;

    public create() {
        this.viewModel = this.resolve(ListViewModel);

        this.render(
            <XF.ContentPage title="Menu Item">
                <XF.StackLayout>
                    <XF.ListView itemsSource={Bind.oneWay(() => this.viewModel.movies.value)}>
                        <XF.ListView.itemTemplate>
                            <XF.DataTemplate>
                                <XF.ViewCell>
                                    <XF.Label text={Bind.oneWay((x) => x.data.name)} />
                                    <XF.ViewCell.contextActions>
                                        <XF.MenuItem text="Edit"
                                            command={Bind.event(() => this.viewModel.edit())} />
                                        <XF.MenuItem text="Delete"
                                            command={Bind.event(() => this.viewModel.delete())} />
                                    </XF.ViewCell.contextActions>
                                </XF.ViewCell>
                            </XF.DataTemplate>
                        </XF.ListView.itemTemplate>
                    </XF.ListView>
                </XF.StackLayout>
            </XF.ContentPage>
        );
    }
}
