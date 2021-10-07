import Bind from "@web-atoms/core/dist/core/Bind";
import { BindableProperty } from "@web-atoms/core/dist/core/BindableProperty";
import XNode from "@web-atoms/core/dist/core/XNode";
import WA from "@web-atoms/xf-controls/dist/clr/WA";
import XCT from "@web-atoms/xf-controls/dist/clr/XCT";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import AtomXFContentPage from "@web-atoms/xf-controls/dist/pages/AtomXFContentPage";

const items = [
    { label: "One", value: 1},
    { label: "Two", value: 2},
    { label: "Three", value: 3},
];

export default class RadioButtonSample extends AtomXFContentPage {

    public create() {

        this.render(<XF.ContentPage>
            <XF.StackLayout>
                <XCT.MediaElement
                        source="https://sec.ch9.ms/ch9/5d93/a1eab4bf-3288-4faf-81c4-294402a85d93/XamarinShow_mid.mp4"
                        showsPlaybackControls={true}
                        />
            </XF.StackLayout>
        </XF.ContentPage>);
    }

}
