import { AtomViewModel } from "@web-atoms/core/dist/view-model/AtomViewModel";
import { AtomXFControl } from "@web-atoms/core/dist/xf/controls/AtomXFControl";
import Bind from "./xf/controls/Binding";
import Button from "./xf/controls/Button";
import Entry from "./xf/controls/Entry";
import Grid from "./xf/controls/Grid";
import Label from "./xf/controls/Label";
import ListBox from "./xf/controls/ListBox";
import Page from "./xf/controls/Page";
import Document from "./xf/document";
import XFControl from "./xf/XFControl";

class SampleViewModel extends AtomViewModel {
    public submit() {
        throw new Error("Method not implemented.");
    }

}

export class HeaderView extends AtomXFControl {

}

const HeaderViewNode = Document.prepare<HeaderView>(HeaderView);

export default class Sample extends XFControl {

    public viewModel: SampleViewModel;
    // nothing

    public create(): void {
        this.viewModel = this.resolve(SampleViewModel);

        this.render(
        <Page>
            <Grid>
                <HeaderViewNode></HeaderViewNode>
                <Label
                    Grid_Row={2}
                    text={Bind.oneTime(() => "")}/>

                <ListBox
                    itemTemplate={<Grid>
                        <Label text={Bind.oneWay((x) => x.data.label)}/>
                    </Grid>}>
                </ListBox>

                <Entry
                    value={Bind.twoWays((x) => x.viewModel.model.userName)}/>
                <Button
                    label={Bind.oneWay((x) => x.viewModel.label)}
                    command={Bind.event(() => this.viewModel.submit() )}
                    />
            </Grid>
        </Page>
        );
    }
}
