import Bind from "@web-atoms/core/dist/core/Bind";
import { BindableProperty } from "@web-atoms/core/dist/core/BindableProperty";
import XNode from "@web-atoms/core/dist/core/XNode";
import FontAwesomeSolid from "@web-atoms/font-awesome/dist/FontAwesomeSolid";
import WA from "@web-atoms/xf-controls/dist/clr/WA";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import AtomXFContentPage from "@web-atoms/xf-controls/dist/pages/AtomXFContentPage";
import SwipeCollectionViewSample from "../collection-view/swipe/SwipeCollectionViewSample";

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

        this.render(<XF.ContentPage title="Check Box List">
            <XF.Grid padding={5}>
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

                        <XF.StackLayout background={XF.SolidColorBrush.red}>
                            <XF.Image>
                                <XF.Image.source>
                                    <XF.FontImageSource
                                            fontFamily={FontAwesomeSolid}
                                            glyph={FontAwesomeSolid.search}
                                            color={XF.Color.darkOrange}
                                            />
                                </XF.Image.source>
                            </XF.Image>
                        </XF.StackLayout>

                        <WA.AtomExpander
                            icon={ Object.assign( new XF.FontImageSource(), {
                                fontFamily: FontAwesomeSolid,
                                glyph: FontAwesomeSolid.search,
                                color: XF.Color.darkOrange
                            }) }
                            background={XF.SolidColorBrush.green}>
                            {/* <WA.AtomExpander.icon>
                                <XF.FontImageSource
                                    fontFamily={FontAwesomeSolid}
                                    glyph={FontAwesomeSolid.search}
                                    color={XF.Color.darkOrange}
                                    size={10}
                                    />
                            </WA.AtomExpander.icon> */}
                            <XF.Label
                                text="Demo"
                                />
                            <WA.AtomExpander.detail>
                                <XF.Label
                                    text="This is detail"
                                    />
                            </WA.AtomExpander.detail>
                        </WA.AtomExpander>

                    </WA.AtomForm>
                </XF.ScrollView>
            </XF.Grid>
        </XF.ContentPage>);
    }

}
