import XNode from "@web-atoms/core/dist/core/XNode";
import FontAwesomeRegular from "@web-atoms/font-awesome/dist/FontAwesomeRegular";
import X from "@web-atoms/xf-controls/dist/clr/X";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import AtomXFTabbedPage from "@web-atoms/xf-controls/dist/pages/AtomXFTabbedPage";

const Args = XNode.prepare("WebAtoms.AtomX:Arguments", true);

export default class TabbedPageView extends AtomXFTabbedPage {

    public create() {
        this.render(
            <XF.TabbedPage>
                <XF.ContentPage
                    iconImageSource={<XF.FontImageSource
                        fontFamily={FontAwesomeRegular.toString()}
                        glyph={FontAwesomeRegular.user} />}
                    title="Tab 1">
                    <XF.StackLayout>
                        <XF.Label text="Tab 1 Content"/>
                    </XF.StackLayout>
                </XF.ContentPage>
                <XF.ContentPage
                    iconImageSource={<XF.FontImageSource
                    fontFamily={FontAwesomeRegular.toString()}
                    glyph={FontAwesomeRegular.map} />}
                    title="Tab 2">
                    <XF.StackLayout>
                        <XF.Label text="Tab 2 Content"/>
                    </XF.StackLayout>
                </XF.ContentPage>
                {/* <XF.TabbedPage.itemTemplate>
                    <XF.DataTemplate>
                        <XF.ContentPage title="Sample">
                            <XF.StackLayout padding="5, 25">
                                <XF.Label text="Label 1" font="Bold,Large" horizontalOptions="Center" />
                                <XF.StackLayout padding="50, 10">
                                    <XF.StackLayout orientation="Horizontal">
                                        <XF.Label text="Family:" horizontalOptions="FillAndExpand" />
                                        <XF.Label text="Label 2" font="Bold,Medium" />
                                    </XF.StackLayout>
                                </XF.StackLayout>
                            </XF.StackLayout>
                        </XF.ContentPage>
                        {/* <SimpleForm></SimpleForm>
                            <List></List>
                    </XF.DataTemplate>
                </XF.TabbedPage.itemTemplate > */}
            </XF.TabbedPage >
        );
    }
}
