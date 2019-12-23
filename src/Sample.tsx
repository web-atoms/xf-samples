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

export default class Sample {

    public viewModel: any;
    // nothing

    public render(): XNode {
        return <ContentView>
            <Grid>
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
