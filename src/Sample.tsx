import { AtomViewModel } from "@web-atoms/core/dist/view-model/AtomViewModel";
import { AtomXFControl } from "@web-atoms/core/dist/xf/controls/AtomXFControl";
import Bind from "./xf/controls/Bind";
import Button from "./xf/controls/Button";
import ContentPage from "./xf/controls/ContentPage";
import Entry from "./xf/controls/Entry";
import Grid from "./xf/controls/Grid";
import Label from "./xf/controls/Label";
import ListBox from "./xf/controls/ListBox";
import Page from "./xf/controls/Page";
import StackLayout from "./xf/controls/StackLayout";
import Document from "./xf/document";
import XFControl from "./xf/XFControl";

class SampleViewModel extends AtomViewModel {
    public submit() {
        throw new Error("Method not implemented.");
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
    // nothing

    public create(): void {
        this.viewModel = this.resolve(SampleViewModel);

        this.render(
        <ContentPage>
            <StackLayout>
                <HeaderViewNode></HeaderViewNode>
                <Label
                    text="Username"/>
                <Entry
                    value={Bind.twoWays((x) => x.viewModel.model.userName)}/>
                <Button
                    label={Bind.oneWay((x) => x.viewModel.label)}
                    command={Bind.event(() => this.viewModel.submit() )}
                    />
            </StackLayout>
        </ContentPage>
        );
    }
}
