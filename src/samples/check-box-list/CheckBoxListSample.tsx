import Bind from "@web-atoms/core/dist/core/Bind";
import { BindableProperty } from "@web-atoms/core/dist/core/BindableProperty";
import XNode from "@web-atoms/core/dist/core/XNode";
import WA from "@web-atoms/xf-controls/dist/clr/WA";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import AtomXFContentPage from "@web-atoms/xf-controls/dist/pages/AtomXFContentPage";

const options = [
    "Audio",
    "Audio & Video",
    "Video",
    "Slatshot",
    "Document",
    "Other"
];

export default class CheckBoxListSample extends AtomXFContentPage {

    @BindableProperty
    public options: any[];

    public create() {

        this.options = [];

        this.render(<XF.ContentPage>
            <XF.Grid>
                <XF.ScrollView>
                    <WA.AtomForm>
                        <WA.AtomField
                            label="Select"
                            >
                            <WA.AtomCheckBoxList
                                selectedItems={Bind.oneWay(() => this.options)}
                                itemsSource={options}
                                />
                        </WA.AtomField>
                        <WA.AtomField>
                            <XF.Label
                                text={Bind.oneWay(() => this.options.length
                                    ? this.options.join(", ")
                                    : "...")}
                                />
                        </WA.AtomField>
                    </WA.AtomForm>
                </XF.ScrollView>
            </XF.Grid>
        </XF.ContentPage>);
    }

}
