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

            <WA.AtomForm>

                <WA.AtomField label="Demo">
                    <XF.Label text="Demo"/>
                </WA.AtomField>

                <WA.AtomField label="Popup Demo">
                <XF.Entry
                    { ... WA.AtomPopup.displayPopup(Bind.oneWay(() => this.hasFocus))}
                    { ... WA.AtomPopup.popupCloseCommand(Bind.event(() => this.hasFocus = false))}
                    eventFocused={Bind.event(() => this.hasFocus = true)}
                    >
                        <WA.AtomPopup.popupTemplate>
                            <XF.DataTemplate>
                                <XF.Label text="I am in popup"/>
                            </XF.DataTemplate>
                        </WA.AtomPopup.popupTemplate>
                    </XF.Entry>

                </WA.AtomField>

            </WA.AtomForm>

        </XF.ContentPage>);
    }
}
