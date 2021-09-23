import Bind from "@web-atoms/core/dist/core/Bind";
import XNode from "@web-atoms/core/dist/core/XNode";
import Pack from "@web-atoms/core/dist/Pack";
import FontAwesomeProSolid from "@web-atoms/font-awesome/dist/FontAwesomeProSolid";
import FontAwesomeSolid from "@web-atoms/font-awesome/dist/FontAwesomeSolid";
import WA from "@web-atoms/xf-controls/dist/clr/WA";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import AtomXFContentPage from "@web-atoms/xf-controls/dist/pages/AtomXFContentPage";
import logo from "@web-atoms/xf-samples/src/images/web-atoms.png";

export default class Expander extends AtomXFContentPage {

    public create() {

        this.render(<XF.ContentPage>
            <XF.Grid
                backgroundColor="#eaeaea">
                <XF.ScrollView>
                <XF.StackLayout
                    margin={10}>
                    <XF.Image
                        source={logo}/>
                        <XF.Label
                        fontSize="25"
                        horizontalOptions="Center"
                        fontAttributes="Bold"
                        text="WebAtoms UI Controls"
                        padding={15}
                        />
                        <WA.AtomExpander
                            padding={5}
                            backgroundColor={XF.Color.white}
                            horizontalOptions="FillAndExpand"
                            >
                            <WA.AtomExpander.icon>
                                <XF.FontImageSource
                                    fontFamily={FontAwesomeSolid}
                                    glyph={FontAwesomeSolid.tags}
                                    color={XF.Color.orangeRed}
                                />
                            </WA.AtomExpander.icon>
                            <XF.Label
                            fontSize="20"
                            text="AtomChips"
                            />
                            <WA.AtomExpander.detail>
                                <XF.Label
                                    text="This control is a material design dynamic element which can be used as input, or to select and filter content or to trigger an action."
                                />
                            </WA.AtomExpander.detail>
                        </WA.AtomExpander>
                        <WA.AtomExpander
                            padding={5}
                            backgroundColor={XF.Color.white}
                            horizontalOptions="FillAndExpand"
                            >
                            <WA.AtomExpander.icon>
                                <XF.FontImageSource
                                    fontFamily={FontAwesomeSolid}
                                    glyph={FontAwesomeSolid.calendar}
                                    color={XF.Color.orangeRed}
                                />
                            </WA.AtomExpander.icon>
                            <XF.Label
                            fontSize="20"
                            text="AtomCalender"
                            />
                            <WA.AtomExpander.detail>
                                <XF.Label
                                    text="This control enables user to select a date by using a visual calendar display. "
                                />
                            </WA.AtomExpander.detail>
                        </WA.AtomExpander>
                        <WA.AtomExpander
                            padding={5}
                            horizontalOptions="FillAndExpand"
                            >
                            <WA.AtomExpander.icon>
                                <XF.FontImageSource
                                    fontFamily={FontAwesomeProSolid}
                                    glyph={FontAwesomeProSolid.chevronDoubleDown}
                                    color={XF.Color.orangeRed}
                                />
                            </WA.AtomExpander.icon>
                            <XF.Label
                            fontSize="20"
                            text="AtomExpander"
                            />
                            <WA.AtomExpander.detail>
                                <XF.Label
                                    text="This control is an expandable container to host any content. It contains a header and expandable content part which allows content toggling by clicking on the header."
                                />
                            </WA.AtomExpander.detail>
                        </WA.AtomExpander>
                        <WA.AtomExpander
                            padding={5}
                            horizontalOptions="FillAndExpand"
                            >
                            <WA.AtomExpander.icon>
                                <XF.FontImageSource
                                    fontFamily={FontAwesomeProSolid}
                                    glyph={FontAwesomeProSolid.ballotCheck}
                                    color={XF.Color.orangeRed}
                                />
                            </WA.AtomExpander.icon>
                            <XF.Label
                            fontSize="20"
                            text="AtomChoiceView"
                            />
                            <WA.AtomExpander.detail>
                                <XF.Label
                                    text="This control is a ComboBox with editable search. It allows user to select an item either by typing or selecting the value from the available list."
                                />
                            </WA.AtomExpander.detail>
                        </WA.AtomExpander>
                        <WA.AtomExpander
                            padding={5}
                            horizontalOptions="FillAndExpand"
                            >
                            <WA.AtomExpander.icon>
                                <XF.FontImageSource
                                    fontFamily={FontAwesomeSolid}
                                    glyph={FontAwesomeSolid.checkSquare}
                                    color={XF.Color.orangeRed}
                                />
                            </WA.AtomExpander.icon>
                            <XF.Label
                            fontSize="20"
                            text="AtomCheckBoxList"
                            />
                            <WA.AtomExpander.detail>
                                <XF.Label
                                    text="This control allows user to select multiple options from the available set of options."
                                />
                            </WA.AtomExpander.detail>
                        </WA.AtomExpander>
                        <WA.AtomExpander
                            padding={5}
                            horizontalOptions="FillAndExpand"
                            >
                            <WA.AtomExpander.icon>
                                <XF.FontImageSource
                                    fontFamily={FontAwesomeProSolid}
                                    glyph={FontAwesomeProSolid.ellipsisHAlt}
                                    color={XF.Color.orangeRed}
                                />
                            </WA.AtomExpander.icon>
                            <XF.Label
                            fontSize="20"
                            text="AtomSuggestions"
                            />
                            <WA.AtomExpander.detail>
                                <XF.Label
                                    text="This control allows user to display limited common options for a given category followed by a clickable element which allows user to view all the available options in a given category. To simply, it is like a 'Show More' option we usually see in the UI design."
                                />
                            </WA.AtomExpander.detail>
                        </WA.AtomExpander>
                </XF.StackLayout>
                </XF.ScrollView>
            </XF.Grid>
        </XF.ContentPage>);
    }

}
