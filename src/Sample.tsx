import { IClassOf } from "@web-atoms/core/dist/core/types";
import { AtomViewModel } from "@web-atoms/core/dist/view-model/AtomViewModel";
import { AtomXFControl } from "@web-atoms/core/dist/xf/controls/AtomXFControl";
import Bind from "./xf/controls/Binding";
import Button from "./xf/controls/Button";
import ContentView from "./xf/controls/ContentView";
import Entry from "./xf/controls/Entry";
import Grid from "./xf/controls/Grid";
import Label from "./xf/controls/Label";
import ListBox from "./xf/controls/ListBox";
import View from "./xf/controls/View";
import document from "./xf/document";
import XNode from "./xf/XNode";

class SampleViewModel extends AtomViewModel {
    public submit() {
        throw new Error("Method not implemented.");
    }

}

export class HeaderView extends AtomXFControl {

}

function createNode<T>(c: IClassOf<T>) {
    return (attributes: { [k in keyof T]?: any }, child: XNode) => {
        return document.createElement(() => child, attributes as any, [child]);
    };
}

const HeaderViewNode = createNode(HeaderView);

export default class Sample extends AtomXFControl {

    public viewModel: SampleViewModel;
    // nothing

    public create(): void {
        this.viewModel = this.resolve(SampleViewModel);

        // tslint:disable-next-line: no-unused-expression
        <ContentView>
            <Grid>
                <HeaderViewNode></HeaderViewNode>
                <Label
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
                    command={ () => this.viewModel.submit() }
                    />
            </Grid>
        </ContentView>;
    }
}
