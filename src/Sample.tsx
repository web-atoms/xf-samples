import Bind from "@web-atoms/core/dist/core/Bind";
import XNode from "@web-atoms/core/dist/core/XNode";
import Action from "@web-atoms/core/dist/view-model/Action";
import { AtomViewModel } from "@web-atoms/core/dist/view-model/AtomViewModel";
import { AtomXFControl } from "@web-atoms/core/dist/xf/controls/AtomXFControl";
import { Button, ColumnDefinition, ColumnDefinitionCollection,
    ContentPage, Entry, Grid,
    Label, RowDefinition, RowDefinitionCollection, ToolbarItem } from "@web-atoms/xf-controls/dist/controls/XF";

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
        this.render(<Label text={ Bind.oneWay(() => this.viewModel.title) }/>);
    }

}

const HeaderViewNode = XNode.prepare<HeaderView>(HeaderView);

/** Test 1 */
export default class Sample extends AtomXFControl {

    public viewModel: SampleViewModel;

    public create(): void {
        this.viewModel = this.resolve(SampleViewModel);

        this.render(
        <ContentPage title={Bind.oneWay(() => this.viewModel.title)}>

            <ContentPage.ToolbarItems>
                <ToolbarItem
                    text="Add"
                    command={Bind.event(() => this.viewModel.submit())}/>
            </ContentPage.ToolbarItems>

            <Grid>

                <Grid.ColumnDefinitions>
                    <ColumnDefinition/>
                    <ColumnDefinition/>
                </Grid.ColumnDefinitions>

                <Grid.RowDefinitions>
                    <RowDefinition/>
                    <RowDefinition/>
                </Grid.RowDefinitions>

                <Label
                    text="Username"/>
                <Entry
                    { ... Grid.Column(1) }
                    text={Bind.twoWays((x) => x.viewModel.model.username)}/>
                <Button
                    { ... Grid.Row(1) }
                    { ... Grid.ColumnSpan(2)}
                    text={Bind.oneWay((x) => x.viewModel.label)}
                    command={Bind.event(() => this.viewModel.submit() )}
                    />
            </Grid>
        </ContentPage>
        );
    }
}
