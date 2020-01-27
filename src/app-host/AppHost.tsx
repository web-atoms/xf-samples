import Bind from "@web-atoms/core/dist/core/Bind";
import XNode from "@web-atoms/core/dist/core/XNode";
import FontAwesomeRegular from "@web-atoms/font-awesome/dist/FontAwesomeRegular";
import WA from "@web-atoms/xf-controls/dist/clr/WA";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import AtomXFMasterDetailPage from "@web-atoms/xf-controls/dist/pages/AtomXFMasterDetailPage";
import AppHostViewModel from "./AppHostViewModel";

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
                <XF.MasterDetailPage.Master>
                    <XF.ContentPage title="Home">
                        <XF.ListView
                            isGroupingEnabled={true}
                            { ... WA.GroupBy.ItemsSource(Bind.oneWay(() => this.viewModel.menuService.groupedMenus)) }>
                            <XF.ListView.GroupHeaderTemplate>
                                <XF.DataTemplate>
                                    <XF.TextCell
                                        text={Bind.oneWay((x) => x.data.label)}/>
                                </XF.DataTemplate>
                            </XF.ListView.GroupHeaderTemplate>
                            <XF.ListView.ItemTemplate>
                                <XF.DataTemplate>
                                    <XF.ViewCell>
                                        <XF.Label text={Bind.oneWay((x) => x.data.label)}>
                                            <XF.Label.GestureRecognizers>
                                                <XF.TapGestureRecognizer
                                                    command={ Bind.event((s) => s.data.click() ) }
                                                    />
                                            </XF.Label.GestureRecognizers>
                                        </XF.Label>
                                    </XF.ViewCell>
                                </XF.DataTemplate>
                            </XF.ListView.ItemTemplate>
                        </XF.ListView>
                    </XF.ContentPage>
                </XF.MasterDetailPage.Master>
                <XF.MasterDetailPage.Detail>
                    <XF.ContentPage title="Web Atoms Demo">
                        <XF.ContentPage.ToolbarItems>
                            <WA.AtomToolbarItem>
                                <WA.AtomToolbarItem.IconImageSource>
                                    <XF.FontImageSource
                                        fontFamily={FontAwesomeRegular}
                                        glyph={FontAwesomeRegular.plusSquare}
                                        />
                                </WA.AtomToolbarItem.IconImageSource>
                            </WA.AtomToolbarItem>
                        </XF.ContentPage.ToolbarItems>
                        <XF.Grid>
                            <XF.Grid.RowDefinitions>
                                <XF.RowDefinition/>
                                <XF.RowDefinition height="Auto"/>
                                <XF.RowDefinition/>
                            </XF.Grid.RowDefinitions>
                            <XF.Grid.ColumnDefinitions>
                                <XF.ColumnDefinition/>
                                <XF.ColumnDefinition width="50"/>
                                <XF.ColumnDefinition width="Auto"/>
                                <XF.ColumnDefinition/>
                            </XF.Grid.ColumnDefinitions>
                            <XF.Label
                                { ... XF.Grid.Row(1) }
                                { ... XF.Grid.Column(1) }
                                fontFamily={FontAwesomeRegular}
                                text={FontAwesomeRegular.smile}
                                />
                            <XF.Label
                                { ... XF.Grid.Row(1) }
                                { ... XF.Grid.Column(2) }
                                text={Bind.oneWay(() => this.viewModel.message)}/>
                        </XF.Grid>
                    </XF.ContentPage>
                </XF.MasterDetailPage.Detail>
            </XF.MasterDetailPage>
        );
    }
}
