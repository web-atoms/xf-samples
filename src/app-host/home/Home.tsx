import Bind from "@web-atoms/core/dist/core/Bind";
import XNode from "@web-atoms/core/dist/core/XNode";
import FontAwesomeSolid from "@web-atoms/font-awesome/dist/FontAwesomeSolid";
import WA from "@web-atoms/xf-controls/dist/clr/WA";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import AtomXFContentPage from "@web-atoms/xf-controls/dist/pages/AtomXFContentPage";
import MenuItem from "../../service/menu-service/MenuItem";
import HomeViewModel from "./HomeViewModel";

const BindMenu = Bind.forData<MenuItem>();

export default class Home extends AtomXFContentPage {

    public viewModel: HomeViewModel;

    public create() {

        this.viewModel = this.resolve(HomeViewModel);

        this.render(
        <XF.ContentPage
            title="Web Atoms Demo">
            <XF.ContentPage.toolbarItems>
                <XF.ToolbarItem command={Bind.event(() => this.viewModel.scan())}>
                    <XF.ToolbarItem.iconImageSource>
                        <XF.FontImageSource
                            size={25}
                            fontFamily={FontAwesomeSolid}
                            glyph={FontAwesomeSolid.qrcode}
                            />
                    </XF.ToolbarItem.iconImageSource>
                </XF.ToolbarItem>
            </XF.ContentPage.toolbarItems>
            <XF.Grid>
                <XF.Grid.rowDefinitions>
                    <XF.RowDefinition height="auto"/>
                    <XF.RowDefinition/>
                </XF.Grid.rowDefinitions>
                <XF.SearchBar
                    placeholder="Search samples"
                    text={Bind.twoWays(() => this.viewModel.search)} />
                <XF.ListView
                    { ... XF.Grid.row(1) }
                    isGroupingEnabled={true}
                    cachingStrategy="RecycleElement"
                    { ... WA.GroupBy.itemsSource( Bind.oneWay(() => this.viewModel.menus) ) }>
                    <XF.ListView.groupHeaderTemplate>
                        <XF.DataTemplate>
                            <XF.ViewCell>
                                <XF.Grid  backgroundColor="#ccc">
                                    <XF.Label textColor="#2e2e2e"
                                        margin="10"
                                        verticalOptions={"Center"}
                                        text={BindMenu.oneWay((x) => x.data.label)}/>
                                </XF.Grid>
                            </XF.ViewCell>
                        </XF.DataTemplate>
                    </XF.ListView.groupHeaderTemplate>
                    <XF.ListView.itemTemplate>
                        <XF.DataTemplate>
                            <XF.ViewCell>
                                <XF.Label text={BindMenu.oneWay((x) => x.data.label)}
                                    padding="10"
                                    verticalOptions={"Center"}>
                                    <XF.Label.gestureRecognizers>
                                        <XF.TapGestureRecognizer
                                            command={ BindMenu.event((s) => s.data.click(true) ) }
                                            />
                                    </XF.Label.gestureRecognizers>
                                </XF.Label>
                            </XF.ViewCell>
                        </XF.DataTemplate>
                    </XF.ListView.itemTemplate>
                </XF.ListView>

            </XF.Grid>
        </XF.ContentPage>);
    }
}
