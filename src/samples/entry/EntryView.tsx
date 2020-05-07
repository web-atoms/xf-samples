import Bind from "@web-atoms/core/dist/core/Bind";
import XNode from "@web-atoms/core/dist/core/XNode";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import AtomXFContentPage from "@web-atoms/xf-controls/dist/pages/AtomXFContentPage";
import EntryViewModel from "./EntryViewModel";

export default class EntryView extends AtomXFContentPage {
    public viewModel: EntryViewModel;

    public create() {
        this.viewModel = this.resolve(EntryViewModel);
        this.render(
            <XF.ContentPage title="Entry View Sample">
                <XF.StackLayout padding="10">
                    <XF.Label text="First Name:"
                        textColor="Black"></XF.Label>
                    <XF.Entry
                        text={Bind.twoWays(() => this.viewModel.model.username)}
                        placeholder="Enter First Name">
                    </XF.Entry>
                    <XF.Label text={Bind.oneWay(() => `First name is ${this.viewModel.model.username}`)}
                        textColor="Maroon" />
                </XF.StackLayout>
            </XF.ContentPage>
        );
    }
}
