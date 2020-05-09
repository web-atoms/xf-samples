import Colors from "@web-atoms/core/dist/core/Colors";
import XNode from "@web-atoms/core/dist/core/XNode";
import FontAwesomeRegular from "@web-atoms/font-awesome/dist/FontAwesomeRegular";
import X from "@web-atoms/xf-controls/dist/clr/X";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import AtomXFTabbedPage from "@web-atoms/xf-controls/dist/pages/AtomXFTabbedPage";
import SimpleForm from "../form/simple/SimpleForm";
import List from "../list/list-view/List";
import FontAwesomeSolid from "@web-atoms/font-awesome/dist/FontAwesomeSolid";

const Args = XNode.prepare("WebAtoms.AtomX:Arguments", true);

export default class TabbedPageView extends AtomXFTabbedPage {

    public create() {
        this.render(
            <XF.TabbedPage title="Tabbed Page Sample"
                selectedTabColor={Colors.black}
                unselectedTabColor={Colors.grey}>
                <XF.ContentPage
                    title="Tab 1">
                    <XF.ContentPage.iconImageSource>
                        <XF.FontImageSource
                            fontFamily={FontAwesomeRegular.toString()}
                            glyph={FontAwesomeRegular.user}/>
                    </XF.ContentPage.iconImageSource>
                    <XF.StackLayout orientation = "Vertical">
                        <XF.Label text="Tab 1 Content"/>
                        <XF.FontImageSource
                            fontFamily={FontAwesomeSolid.toString()}
                            glyph={FontAwesomeSolid.gem}
                            size="20" />
                    </XF.StackLayout>
                </XF.ContentPage>
                <XF.ContentPage
                    title="Tab 2">
                    <XF.ContentPage.iconImageSource>
                        <XF.FontImageSource
                            fontFamily={FontAwesomeRegular.toString()}
                            glyph={FontAwesomeRegular.map}/>
                    </XF.ContentPage.iconImageSource>
                    <XF.StackLayout orientation = "Vertical">
                        <XF.Label text="Tab 2 Content"/>
                        <XF.FontImageSource
                            fontFamily={FontAwesomeSolid.toString()}
                            glyph={FontAwesomeSolid.globe}
                            size="20" />
                    </XF.StackLayout>
                </XF.ContentPage>
                <SimpleForm>
                    <XF.ContentPage.iconImageSource>
                        <XF.FontImageSource
                            fontFamily={FontAwesomeRegular.toString()}
                            glyph={FontAwesomeRegular.newspaper}/>
                    </XF.ContentPage.iconImageSource>
                </SimpleForm>
                <List>
                    <XF.ContentPage.iconImageSource>
                        <XF.FontImageSource
                            fontFamily={FontAwesomeRegular.toString()}
                            glyph={FontAwesomeRegular.listAlt}/>
                    </XF.ContentPage.iconImageSource>
                </List>
            </XF.TabbedPage >
        );
    }
}
