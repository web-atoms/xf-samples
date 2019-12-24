import Action from "@web-atoms/core/dist/view-model/Action";
import { AtomViewModel } from "@web-atoms/core/dist/view-model/AtomViewModel";
import { AtomXFControl } from "@web-atoms/core/dist/xf/controls/AtomXFControl";
import Bind from "./xf/controls/Bind";
import Button from "./xf/controls/Button";
import CollectionView from "./xf/controls/CollectionView";
import ContentPage from "./xf/controls/ContentPage";
import Entry from "./xf/controls/Entry";
import Grid from "./xf/controls/Grid";
import Label from "./xf/controls/Label";
import ListBox from "./xf/controls/ListView";
import ListView from "./xf/controls/ListView";
import Page from "./xf/controls/Page";
import StackLayout from "./xf/controls/StackLayout";
import Document from "./xf/document";
import XFControl from "./xf/XFControl";

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

export class HeaderView extends XFControl {

    public create(): void {
        this.render(<Label text={ Bind.oneWay(() => this.viewModel.title) }/>);
    }

}

const HeaderViewNode = Document.prepare<HeaderView>(HeaderView);

export default class Sample extends XFControl {

    public viewModel: SampleViewModel;

    public create(): void {
        this.viewModel = this.resolve(SampleViewModel);

        this.render(
        <ContentPage>
            <StackLayout>
                <HeaderViewNode></HeaderViewNode>
                <Label
                    text="Username"/>
                <Entry
                    text={Bind.twoWays((x) => x.viewModel.model.username)}/>
                <Button
                    text={Bind.oneWay((x) => x.viewModel.label)}
                    command={Bind.oneTime(() => () => this.viewModel.submit() )}
                    />

                <ListView
                    itemsSource={Bind.oneTime(() => this.viewModel.countries)}
                    itemTemplate={<Label text={Bind.oneWay((x) => x.data.label)}/>}
                    ></ListView>
            </StackLayout>
        </ContentPage>
        );
    }
}