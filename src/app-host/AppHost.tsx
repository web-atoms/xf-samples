import Bind from "@web-atoms/core/dist/core/Bind";
import XNode from "@web-atoms/core/dist/core/XNode";
import FontAwesomeRegular from "@web-atoms/font-awesome/dist/FontAwesomeRegular";
import FontAwesomeSolid from "@web-atoms/font-awesome/dist/FontAwesomeSolid";
import WA from "@web-atoms/xf-controls/dist/clr/WA";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import AtomXFMasterDetailPage from "@web-atoms/xf-controls/dist/pages/AtomXFMasterDetailPage";
import AppHostViewModel from "./AppHostViewModel";
import X from "@web-atoms/xf-controls/dist/clr/X";
import Home from "./home/Home";

export default class AppHost extends AtomXFMasterDetailPage {

    public viewModel: AppHostViewModel;

    public create(): void {

        this.viewModel = this.resolve(AppHostViewModel);
        this.viewModel.owner = this;

        // tslint:disable-next-line: no-console
        console.log(`Render start`);

        this.render(
            <XF.MasterDetailPage
                isPresented={Bind.twoWays(() => this.viewModel.menuService.isOpen)}
                title="Demo 1">
                <XF.MasterDetailPage.master>
                    <XF.ContentPage title="Home">
                        <XF.ListView
                            cachingStrategy="RecycleElement"
                            isGroupingEnabled={true}
                            rowHeight={50}
                            margin = {0}
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
                                        <XF.Label text={Bind.oneWay((x) => x.data.label)}
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
                </XF.MasterDetailPage.master>
                <XF.MasterDetailPage.detail>
                    <XF.NavigationPage>
                        <X.Arguments>
                            <Home/>
                        </X.Arguments>
                    </XF.NavigationPage>
                </XF.MasterDetailPage.detail>
            </XF.MasterDetailPage>
        );
    }
}
