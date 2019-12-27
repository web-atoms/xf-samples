import Bind from "@web-atoms/core/dist/core/xnode/Bind";
import XNode from "@web-atoms/core/dist/core/xnode/XNode";
import { AtomXFControl } from "@web-atoms/core/dist/xf/controls/AtomXFControl";
import { ColumnDefinition, ContentPage, Grid, Label, ListView,
    MasterDetailPage, RowDefinition, TapGestureRecognizer } from "@web-atoms/xf-controls/dist/controls/XF";
import AppHostViewModel from "./AppHostViewModel";

export default class AppHost extends AtomXFControl {

    public viewModel: AppHostViewModel;

    public create(): void {

        this.viewModel = this.resolve(AppHostViewModel);

        this.render(
            <MasterDetailPage
                isPresented={Bind.twoWays(() => this.viewModel.menuService.isOpen)}
                title="Demo 1"
                detail={Bind.oneWay(() => this.viewModel.currentPage.element)}>
                <MasterDetailPage.Master>
                    <ContentPage title="Home">
                        <ListView
                            itemsSource={Bind.oneWay(() => this.viewModel.menuService.menus)}>
                            <ListView.ItemTemplate>
                                <Label text={Bind.oneWay((x) => x.data.label)}>
                                    <Label.GestureRecognizers>
                                        <TapGestureRecognizer
                                            command={ Bind.event((s) => s.data.click() ) }
                                            />
                                    </Label.GestureRecognizers>
                                </Label>
                            </ListView.ItemTemplate>
                        </ListView>
                    </ContentPage>
                </MasterDetailPage.Master>
                <MasterDetailPage.Detail>
                    <ContentPage title="Web Atoms Demo">
                        <Grid>
                            <Grid.RowDefinitions>
                                <RowDefinition/>
                                <RowDefinition height="Auto"/>
                                <RowDefinition/>
                            </Grid.RowDefinitions>
                            <Grid.ColumnDefinitions>
                                <ColumnDefinition/>
                                <ColumnDefinition width="Auto"/>
                                <ColumnDefinition/>
                            </Grid.ColumnDefinitions>
                            <Label
                                { ... Grid.Row(1) }
                                { ... Grid.Column(1) }
                                text={Bind.oneWay(() => this.viewModel.message)}/>
                        </Grid>
                    </ContentPage>
                </MasterDetailPage.Detail>
            </MasterDetailPage>
        );
    }
}
