import Bind from "@web-atoms/core/dist/core/Bind";
import XNode from "@web-atoms/core/dist/core/XNode";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import AtomXFContentPage from "@web-atoms/xf-controls/dist/pages/AtomXFContentPage";
import ToolbarItemViewModel from "./ToolbarItemViewModel";

export default class ToolbarItemView extends AtomXFContentPage {

    public viewModel: ToolbarItemViewModel;

    public create() {
        this.viewModel = this.resolve(ToolbarItemViewModel);
        this.render(
            <XF.ContentPage>
                <XF.ContentPage.toolbarItems>
                    <XF.ToolbarItem text="Toolbar 1"
                        order="Primary"
                        priority={0} />
                    <XF.ToolbarItem text="Toolbar 2"
                        order="Secondary"
                        priority={0} />
                    <XF.ToolbarItem text="Toolbar 3"
                        order="Secondary"
                        priority={0} />
                </XF.ContentPage.toolbarItems>
                <XF.StackLayout>
                    <XF.ListView itemsSource={Bind.oneWay(() => this.viewModel.movies.value)}>
                            <XF.ListView.itemTemplate>
                                <XF.DataTemplate>
                                    <XF.ViewCell>
                                        <XF.Label text={Bind.oneWay((x) => x.data.name)} />
                                    </XF.ViewCell>
                                </XF.DataTemplate>
                            </XF.ListView.itemTemplate>
                    </XF.ListView>
                </XF.StackLayout>
            </XF.ContentPage>
        );
    }
}
