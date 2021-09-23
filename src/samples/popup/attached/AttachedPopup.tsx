import Bind from "@web-atoms/core/dist/core/Bind";
import { BindableProperty } from "@web-atoms/core/dist/core/BindableProperty";
import XNode from "@web-atoms/core/dist/core/XNode";
import FontAwesomeSolid from "@web-atoms/font-awesome/dist/FontAwesomeSolid";
import WA from "@web-atoms/xf-controls/dist/clr/WA";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import AtomXFContentPage from "@web-atoms/xf-controls/dist/pages/AtomXFContentPage";

export default class AttachedPopup extends AtomXFContentPage {

    @BindableProperty
    public hasFocus: boolean;

    @BindableProperty
    public openPopup: boolean;

    public create() {
        this.hasFocus = false;
        this.render(<XF.ContentPage>
            <XF.Grid>
                <XF.ScrollView>
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

                    <WA.AtomField>
                        <XF.Grid columnDefinitions="*,auto">
                            <XF.Entry/>
                            <XF.ImageButton
                                command={() => this.openPopup = !this.openPopup}
                                backgroundColor={XF.Color.transparent}
                                { ... WA.AtomPopup.horizontalAlignment("End")}
                                { ... WA.AtomPopup.displayPopup(Bind.oneWay(() => this.openPopup))}
                                { ... XF.Grid.column(1)}
                                source={Object.assign(new XF.FontImageSource(), {
                                    glyph: FontAwesomeSolid.search,
                                    fontFamily: FontAwesomeSolid,
                                    color: XF.Color.black
                                })}>
                                <WA.AtomPopup.popupTemplate>
                                    <XF.Grid
                                        widthRequest={300}
                                        rowDefinitions="*,auto"
                                        columnDefinitions="*,*">
                                        <WA.AtomCalendar
                                            { ... XF.Grid.columnSpan(2)}
                                            />
                                        <XF.Label
                                            { ... XF.Grid.row(1) }
                                            text="a"/>
                                        <XF.Label
                                            { ... XF.Grid.row(1) }
                                            { ... XF.Grid.column(1) }
                                            text="b"/>
                                    </XF.Grid>
                                </WA.AtomPopup.popupTemplate>
                            </XF.ImageButton>
                        </XF.Grid>
                    </WA.AtomField>

                    </WA.AtomForm>

                </XF.ScrollView>
            </XF.Grid>

        </XF.ContentPage>);
    }
}
