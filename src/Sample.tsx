import Bind from "@web-atoms/core/dist/core/Bind";
import XNode from "@web-atoms/core/dist/core/XNode";
import Action from "@web-atoms/core/dist/view-model/Action";
import { AtomViewModel } from "@web-atoms/core/dist/view-model/AtomViewModel";
import { AtomXFControl } from "@web-atoms/core/dist/xf/controls/AtomXFControl";
import XF from "@web-atoms/xf-controls/dist/clr/XF";

class SampleViewModel extends AtomViewModel {

    public title = "New User";

    public label = "Signup";

    public model: any = {
        username: "Empty"
    };

    public countries = [
        { label: "India" },
        { label: "UK" },
        { label: "USA" },
        { label: "Russia" }
    ];

    @Action()
    public submit() {
        throw new Error(`Invalid username ${this.model.username}`);
    }

}

export class HeaderView extends AtomXFControl {

    public create(): void {
        this.render(<XF.Label text={ Bind.oneWay(() => this.viewModel.title) }/>);
    }

}

const HeaderViewNode = XNode.prepare<HeaderView>(HeaderView);

/** Test 1 */
export default class Sample extends AtomXFControl {

    public viewModel: SampleViewModel;

    public create(): void {
        this.viewModel = this.resolve(SampleViewModel);

        this.render(
        <XF.ContentPage title={Bind.oneWay(() => this.viewModel.title)}>

            <XF.ContentPage.ToolbarItems>
                <XF.ToolbarItem
                    text="Add"
                    command={Bind.event(() => this.viewModel.submit())}/>
            </XF.ContentPage.ToolbarItems>

            <XF.Grid>

                <XF.Grid.ColumnDefinitions>
                    <XF.ColumnDefinition/>
                    <XF.ColumnDefinition/>
                </XF.Grid.ColumnDefinitions>

                <XF.Grid.RowDefinitions>
                    <XF.RowDefinition/>
                    <XF.RowDefinition/>
                </XF.Grid.RowDefinitions>

                <XF.Label
                    text="Username"/>
                <XF.Entry
                    { ... XF.Grid.Column(1) }
                    text={Bind.twoWays((x) => x.viewModel.model.username)}/>
                <XF.Button
                    { ... XF.Grid.Row(1) }
                    { ... XF.Grid.ColumnSpan(2)}
                    text={Bind.oneWay((x) => x.viewModel.label)}
                    command={Bind.event(() => this.viewModel.submit() )}
                    />
            </XF.Grid>
        </XF.ContentPage>
        );
    }
}
