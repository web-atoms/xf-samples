import Bind from "@web-atoms/core/dist/core/Bind";
import { BindableProperty } from "@web-atoms/core/dist/core/BindableProperty";
import XNode from "@web-atoms/core/dist/core/XNode";
import WA from "@web-atoms/xf-controls/dist/clr/WA";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import AtomXFContentPage from "@web-atoms/xf-controls/dist/pages/AtomXFContentPage";

export default class AttachedPopup extends AtomXFContentPage {

    @BindableProperty
    public hasFocus: boolean;

    public create() {
        this.hasFocus = false;
        this.render(<XF.ContentPage>
            <XF.ScrollView>
            <XF.StackLayout>

                <XF.BoxView
                    widthRequest={100}
                    heightRequest={800}
                    />

                <XF.Entry
                    { ... WA.AtomPopup.displayPopup(Bind.oneWay(() => this.hasFocus))}
                    eventFocused={Bind.event(() => this.hasFocus = true)}
                    >
                        <WA.AtomPopup.popupTemplate>
                            <XF.DataTemplate>
                                <XF.Label text="I am in popup">
                                    <XF.Label.gestureRecognizers>
                                        <XF.TapGestureRecognizer
                                            command={Bind.event(() => this.hasFocus = false)}
                                            />
                                    </XF.Label.gestureRecognizers>
                                </XF.Label>
                            </XF.DataTemplate>
                        </WA.AtomPopup.popupTemplate>
                    </XF.Entry>

                <XF.BoxView
                    widthRequest={100}
                    heightRequest={100}
                    />
            </XF.StackLayout>
            </XF.ScrollView>
        </XF.ContentPage>);
    }
}
