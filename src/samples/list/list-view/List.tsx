import Bind from "@web-atoms/core/dist/core/Bind";
import XNode from "@web-atoms/core/dist/core/XNode";
import { AtomXFControl } from "@web-atoms/core/dist/xf/controls/AtomXFControl";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import AtomXFContentPage from "@web-atoms/xf-controls/dist/pages/AtomXFContentPage";
import ListViewModel from "./ListViewModel";

export default class List extends AtomXFContentPage {

    public viewModel: ListViewModel;

    public create() {
        this.viewModel = this.resolve(ListViewModel);

        this.render(
            <XF.ContentPage title="List Sample">
                <XF.ListView itemsSource={Bind.oneWay(() => this.viewModel.movies.value)}>
                    <XF.ListView.ItemTemplate>
                        <XF.DataTemplate>
                            <XF.ViewCell>
                                <XF.Label text={Bind.oneWay((x) => x.data.name)}/>
                            </XF.ViewCell>
                        </XF.DataTemplate>
                    </XF.ListView.ItemTemplate>
                </XF.ListView>
            </XF.ContentPage>
        );
    }

}
