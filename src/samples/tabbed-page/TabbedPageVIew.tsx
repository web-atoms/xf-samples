import XNode from "@web-atoms/core/dist/core/XNode";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import AtomXFContentPage from "@web-atoms/xf-controls/dist/pages/AtomXFContentPage";
import SimpleForm from "../form/simple/SimpleForm";
import List from "../list/list-view/List";

export default class TabbedPageView extends AtomXFContentPage {

    public create() {
        this.render(
            <XF.TabbedPage>
                <XF.TabbedPage.itemTemplate>
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
                            <List></List>*/}
                    </XF.DataTemplate>
                </XF.TabbedPage.itemTemplate>
            </XF.TabbedPage>
        );
    }
}
