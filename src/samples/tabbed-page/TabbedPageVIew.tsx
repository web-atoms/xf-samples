import XNode from "@web-atoms/core/dist/core/XNode";
import FontAwesomeRegular from "@web-atoms/font-awesome/dist/FontAwesomeRegular";
import X from "@web-atoms/xf-controls/dist/clr/X";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import AtomXFTabbedPage from "@web-atoms/xf-controls/dist/pages/AtomXFTabbedPage";
import SimpleForm from "../form/simple/SimpleForm";
import List from "../list/list-view/List";
import Colors from "@web-atoms/core/dist/core/Colors";

const Args = XNode.prepare("WebAtoms.AtomX:Arguments", true);

export default class TabbedPageView extends AtomXFTabbedPage {

    public create() {
        this.render(
            <XF.TabbedPage>
                <XF.ContentPage
                    title="Tab 1">
                    <XF.ContentPage.iconImageSource>
                        <XF.FontImageSource
                            fontFamily={FontAwesomeRegular.toString()}
                            glyph={FontAwesomeRegular.user}
                            color={Colors.black} />
                    </XF.ContentPage.iconImageSource>
                    <XF.StackLayout>
                        <XF.Label text="Tab 1 Content"/>
                    </XF.StackLayout>
                </XF.ContentPage>
                <XF.ContentPage
                    title="Tab 2">
                    <XF.ContentPage.iconImageSource>
                        <XF.FontImageSource
                            fontFamily={FontAwesomeRegular.toString()}
                            glyph={FontAwesomeRegular.map}
                            color={Colors.black} />
                    </XF.ContentPage.iconImageSource>
                    <XF.StackLayout>
                        <XF.Label text="Tab 2 Content"/>
                    </XF.StackLayout>
                </XF.ContentPage>
                <SimpleForm>
                    <XF.ContentPage.iconImageSource>
                        <XF.FontImageSource
                            fontFamily={FontAwesomeRegular.toString()}
                            glyph={FontAwesomeRegular.newspaper}
                            color={Colors.black} />
                    </XF.ContentPage.iconImageSource>
                </SimpleForm>
                <List>
                    <XF.ContentPage.iconImageSource>
                        <XF.FontImageSource
                            fontFamily={FontAwesomeRegular.toString()}
                            glyph={FontAwesomeRegular.listAlt}
                            color={Colors.black}/>
                    </XF.ContentPage.iconImageSource>
                </List>
            </XF.TabbedPage >
        );
    }
}
