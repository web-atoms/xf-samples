import Bind from "@web-atoms/core/dist/core/Bind";
import XNode from "@web-atoms/core/dist/core/XNode";
import { AtomXFControl } from "@web-atoms/core/dist/xf/controls/AtomXFControl";
import { ContentPage, Label, ListView } from "@web-atoms/xf-controls/dist/controls/XF";
import ListViewModel from "./ListViewModel";

export default class List extends AtomXFControl {

    public viewModel: ListViewModel;

    public create() {
        this.viewModel = this.resolve(ListViewModel);

        this.render(
            <ContentPage title="List Sample">
                <ListView itemsSource={Bind.oneWay(() => this.viewModel.movies.value)}>
                    <ListView.ItemTemplate>
                        <Label text={Bind.oneWay((x) => x.data.name)}/>
                    </ListView.ItemTemplate>
                </ListView>
            </ContentPage>
        );
    }

}
