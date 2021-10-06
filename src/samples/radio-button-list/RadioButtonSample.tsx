import Bind from "@web-atoms/core/dist/core/Bind";
import { BindableProperty } from "@web-atoms/core/dist/core/BindableProperty";
import XNode from "@web-atoms/core/dist/core/XNode";
import WA from "@web-atoms/xf-controls/dist/clr/WA";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import AtomXFContentPage from "@web-atoms/xf-controls/dist/pages/AtomXFContentPage";

const items = [
    { label: "One", value: 1},
    { label: "Two", value: 2},
    { label: "Three", value: 3},
];

export default class RadioButtonSample extends AtomXFContentPage {

    @BindableProperty
    public selection: any;

    public create() {

        this.selection = 2;

        this.render(<XF.ContentPage>
            <XF.StackLayout>
                <WA.AtomRadioButtonList
                    itemsSource={items}
                    selectedItem={Bind.twoWays(() => this.selection, null , {
                        fromSource: (v) => items.find((i) => i.value === v),
                        fromTarget: (v) => v.value
                    })}
                    >
                    <WA.AtomRadioButtonList.itemTemplate>
                        <XF.Label text={Bind.oneWay((x) => x.data.label)}/>
                    </WA.AtomRadioButtonList.itemTemplate>
                </WA.AtomRadioButtonList>
                <WA.AtomField
                    label="Selected Value:"
                    >
                    <XF.Label text={Bind.oneWay(() => this.selection)}/>
                </WA.AtomField>
            </XF.StackLayout>
        </XF.ContentPage>);
    }

}
