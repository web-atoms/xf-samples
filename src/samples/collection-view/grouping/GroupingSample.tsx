import Bind from "@web-atoms/core/dist/core/Bind";
import XNode from "@web-atoms/core/dist/core/XNode";
import WA from "@web-atoms/xf-controls/dist/clr/WA";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import AtomXFContentPage from "@web-atoms/xf-controls/dist/pages/AtomXFContentPage";
import GroupingViewModel from "./GroupingViewModel";

export default class GroupingSample extends AtomXFContentPage {

    public viewModel: GroupingViewModel;

    public create() {
        this.viewModel = this.resolve(GroupingViewModel);

        this.render(
            <XF.ContentPage title = "Grouping Sample">
                <XF.CollectionView
                    itemSizingStrategy="MeasureAllItems"
                    { ... WA.GroupBy.itemsSource(Bind.oneWay(() => this.viewModel.group)) }
                    isGrouped = {true}
                    itemsLayout = "VerticalList">
                <XF.CollectionView.groupHeaderTemplate>
                    <XF.DataTemplate>
                        <XF.Label text={Bind.oneWay((x) => x.data.name)}
                            BackgroundColor="LightGray"
                            FontSize="Large"
                            FontAttributes="Bold" />
                    </XF.DataTemplate>
                </XF.CollectionView.groupHeaderTemplate>
                <XF.CollectionView.itemTemplate>
                    <XF.Grid Padding="10">
                        <XF.Grid.rowDefinitions>
                            <XF.RowDefinition Height="Auto" />
                            <XF.RowDefinition Height="Auto" />
                        </XF.Grid.rowDefinitions>
                        <XF.Grid.columnDefinitions>
                            <XF.ColumnDefinition Width="Auto" />
                            <XF.ColumnDefinition Width="Auto" />
                        </XF.Grid.columnDefinitions>
                        <XF.Image {...XF.Grid.rowSpan(2)}
                            Source = {Bind.oneWay((x) => x.data.image)}
                            Aspect="AspectFill"
                            HeightRequest="60"
                            WidthRequest="60" />
                        <XF.Label {...XF.Grid.column(1)}
                            text = {Bind.oneWay((x) => x.data.name)}
                            FontAttributes="Bold" />
                        <XF.Label {...XF.Grid.row(1)}
                            {...XF.Grid.column(1)}
                            text = {Bind.oneWay((x) => x.data.location)}
                            FontAttributes="Italic"
                            VerticalOptions="End" />
                    </XF.Grid>
                </XF.CollectionView.itemTemplate>
                </XF.CollectionView>
            </XF.ContentPage>
        );
    }
}
