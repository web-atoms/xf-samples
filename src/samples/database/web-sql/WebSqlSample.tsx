import Bind from "@web-atoms/core/dist/core/Bind";
import Colors from "@web-atoms/core/dist/core/Colors";
import XNode from "@web-atoms/core/dist/core/XNode";
import FontAwesomeRegular from "@web-atoms/font-awesome/dist/FontAwesomeRegular";
import FontAwesomeSolid from "@web-atoms/font-awesome/dist/FontAwesomeSolid";
import WA from "@web-atoms/xf-controls/dist/clr/WA";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import AtomXFContentPage from "@web-atoms/xf-controls/dist/pages/AtomXFContentPage";
import WebSqlViewModel from "./WebSqlViewModel";

function CommandButton(text: string, glyph, command: any) {
    return <XF.Button
        text={text}
        command={command}>
        <XF.Button.imageSource>
            <XF.FontImageSource
                fontFamily={FontAwesomeSolid}
                glyph={glyph}
                />
        </XF.Button.imageSource>
    </XF.Button>;
}

export default class WebSqlSample extends AtomXFContentPage {

    public viewModel: WebSqlViewModel;

    public create() {

        this.viewModel = this.resolve(WebSqlViewModel);

        this.render(<XF.ContentPage title="Sqlite Demo">
            <XF.ContentPage.toolbarItems>
                <WA.AtomToolbarItem
                    command={Bind.event(() => this.viewModel.addRow())}>
                    <XF.ToolbarItem.iconImageSource>
                        <XF.FontImageSource
                            fontFamily={FontAwesomeRegular}
                            glyph={FontAwesomeRegular.plusSquare}
                            />
                    </XF.ToolbarItem.iconImageSource>
                </WA.AtomToolbarItem>
            </XF.ContentPage.toolbarItems>
            <XF.Grid rowDefinitions="*, auto">
                <XF.ListView
                    itemsSource={Bind.oneWay(() => this.viewModel.rows )}
                    selectedItem={Bind.twoWays(() => this.viewModel.selectedRow)}>
                    <XF.ListView.itemTemplate>
                        <XF.DataTemplate>
                            <XF.TextCell
                                text={Bind.oneWay((x) => x.data.name)}
                                detail={Bind.oneWay((x) => x.data.id)}
                                />
                        </XF.DataTemplate>
                    </XF.ListView.itemTemplate>
                </XF.ListView>
                <XF.StackLayout
                    isVisible={Bind.oneWay(() => this.viewModel.selectedRow ? true : false)}
                    { ... XF.Grid.row(1) }
                    orientation="Horizontal">
                    {CommandButton("Modify", FontAwesomeSolid.edit, Bind.event(() => this.viewModel.edit()))}
                    {CommandButton("Delete", FontAwesomeSolid.windowClose, Bind.event(() => this.viewModel.delete()))}
                </XF.StackLayout>
            </XF.Grid>
        </XF.ContentPage>);
    }

}
