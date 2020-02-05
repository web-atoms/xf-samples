import Bind from "@web-atoms/core/dist/core/Bind";
import XNode from "@web-atoms/core/dist/core/XNode";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import AtomXFContentPage from "@web-atoms/xf-controls/dist/pages/AtomXFContentPage";
import ListViewModel from "../list/list-view/ListViewModel";

export default class PickerView extends AtomXFContentPage {

    public viewModel: ListViewModel;

    public create() {
        this.viewModel = this.resolve(ListViewModel);
        this.render(
            <XF.ContentPage>
                <XF.Picker
                    itemsSource={Bind.oneWay(() => this.viewModel.movies.value)}
                    title="Select Movie"
                    titleColor="Red"
                    selectedItem={Bind.twoWays(() => this.viewModel.movie)} />
            </XF.ContentPage>
        );
    }
}
