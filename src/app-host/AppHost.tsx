import Bind from "@web-atoms/core/dist/core/Bind";
import XNode from "@web-atoms/core/dist/core/XNode";
import XF from "@web-atoms/xf-controls/dist/controls/XF";
import AtomMasterDetailPage from "@web-atoms/xf-controls/dist/pages/AtomMasterDetailPage";
import AppHostViewModel from "./AppHostViewModel";

export default class AppHost extends AtomMasterDetailPage {

    public viewModel: AppHostViewModel;

    public create(): void {

        this.viewModel = this.resolve(AppHostViewModel);
        this.viewModel.owner = this;

        this.render(
            <XF.MasterDetailPage
                isPresented={Bind.twoWays(() => this.viewModel.menuService.isOpen)}
                title="Demo 1">
                <XF.MasterDetailPage.Master>
                    <XF.ContentPage title="Home">
                        <XF.ListView
                            itemsSource={Bind.oneWay(() => this.viewModel.menuService.menus)}>
                            <XF.ListView.ItemTemplate>
                                <XF.DataTemplate>
                                    <XF.Label text={Bind.oneWay((x) => x.data.label)}>
                                        <XF.Label.GestureRecognizers>
                                            <XF.TapGestureRecognizer
                                                command={ Bind.event((s) => s.data.click() ) }
                                                />
                                        </XF.Label.GestureRecognizers>
                                    </XF.Label>
                                </XF.DataTemplate>
                            </XF.ListView.ItemTemplate>
                        </XF.ListView>
                    </XF.ContentPage>
                </XF.MasterDetailPage.Master>
                <XF.MasterDetailPage.Detail>
                    <XF.ContentPage title="Web Atoms Demo">
                        <XF.Grid>
                            <XF.Grid.RowDefinitions>
                                <XF.RowDefinition/>
                                <XF.RowDefinition height="Auto"/>
                                <XF.RowDefinition/>
                            </XF.Grid.RowDefinitions>
                            <XF.Grid.ColumnDefinitions>
                                <XF.ColumnDefinition/>
                                <XF.ColumnDefinition width="Auto"/>
                                <XF.ColumnDefinition/>
                            </XF.Grid.ColumnDefinitions>
                            <XF.Label
                                { ... XF.Grid.Row(1) }
                                { ... XF.Grid.Column(1) }
                                text={Bind.oneWay(() => this.viewModel.message)}/>
                        </XF.Grid>
                    </XF.ContentPage>
                </XF.MasterDetailPage.Detail>
            </XF.MasterDetailPage>
        );
    }
}
