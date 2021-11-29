import logo from "@web-atoms/@web-atoms/xf-samples/src/images/web-atoms.png";
import Bind from "@web-atoms/core/dist/core/Bind";
import Colors from "@web-atoms/core/dist/core/Colors";
import XNode from "@web-atoms/core/dist/core/XNode";
import FontAwesomeSolid from "@web-atoms/font-awesome/dist/FontAwesomeSolid";
import WA from "@web-atoms/xf-controls/dist/clr/WA";
import X from "@web-atoms/xf-controls/dist/clr/X";
import XF, { Xamarin } from "@web-atoms/xf-controls/dist/clr/XF";
import AtomXFFlyoutPage from "@web-atoms/xf-controls/dist/pages/AtomXFFlyoutPage";
import AppHostViewModel from "./AppHostViewModel";
import Home from "./home/Home";

export default class AppHost extends AtomXFFlyoutPage {

    public viewModel: AppHostViewModel;

    public create(): void {

        this.viewModel = this.resolve(AppHostViewModel);
        this.viewModel.owner = this;

        // tslint:disable-next-line: no-console
        console.log(`Render start`);
        debugger;
        this.render(
            <XF.FlyoutPage
                isPresented={Bind.twoWays(() => this.viewModel.menuService.isOpen)}
                title="Demo 1">
                <XF.FlyoutPage.flyout>
                    <XF.ContentPage title="Home">
                        <XF.ContentPage.iconImageSource>
                            <XF.FontImageSource
                                size={25}
                                color={Colors.darkOrange}
                                fontFamily={FontAwesomeSolid}
                                glyph={FontAwesomeSolid.home}
                                />
                        </XF.ContentPage.iconImageSource>

                        <XF.ListView
                            cachingStrategy="RecycleElement"
                            isGroupingEnabled={true}
                            rowHeight={50}
                            margin="0,0,0,50"
                            { ... WA.GroupBy.itemsSource(Bind.oneWay(() => this.viewModel.menuService.groupedMenus)) }>
                            <XF.ListView.groupHeaderTemplate>
                                <XF.DataTemplate>
                                    <XF.ViewCell>
                                        <XF.Grid  backgroundColor="#ccc">
                                            <XF.Label textColor="#2e2e2e"
                                                margin="10"
                                                verticalOptions={"Center"}
                                                text={Bind.oneWay((x) => x.data.label)}/>
                                        </XF.Grid>
                                    </XF.ViewCell>
                                </XF.DataTemplate>
                            </XF.ListView.groupHeaderTemplate>
                            <XF.ListView.itemTemplate>
                                <XF.DataTemplate>
                                    <XF.ViewCell>
                                        <XF.Label
                                            automationId="menu"
                                            text={Bind.oneWay((x) => x.data.label)}
                                            padding="10"
                                            verticalOptions={"Center"}>
                                            <XF.Label.gestureRecognizers>
                                                <XF.TapGestureRecognizer
                                                    command={ Bind.event((s) => s.data.click() ) }
                                                    />
                                            </XF.Label.gestureRecognizers>
                                        </XF.Label>
                                    </XF.ViewCell>
                                </XF.DataTemplate>
                            </XF.ListView.itemTemplate>
                        </XF.ListView>
                    </XF.ContentPage>
                </XF.FlyoutPage.flyout>
                <XF.FlyoutPage.detail>
                    <XF.NavigationPage>
                        <X.Arguments>
                            <Home/>
                        </X.Arguments>
                    </XF.NavigationPage>
                </XF.FlyoutPage.detail>
            </XF.FlyoutPage>
        );
    }
}
