import Bind from "@web-atoms/core/dist/core/Bind";
import XNode from "@web-atoms/core/dist/core/XNode";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import AtomXFContentPage from "@web-atoms/xf-controls/dist/pages/AtomXFContentPage";
import CollectionViewSampleViewModel from "../CollectionViewSampleViewModel";
import HorizontalListViewModel from "./HorizontalListViewModel";

export default class HorizontalListSample extends AtomXFContentPage {

    public viewModel: HorizontalListViewModel;

    public create() {
        this.viewModel = this.resolve(HorizontalListViewModel);

        this.render(
            <XF.ContentPage title = "Horizontal List Sample">
                <XF.CollectionView itemsSource = {Bind.oneWay(() => this.viewModel.list)}
                    itemsLayout = "HorizontalList">
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
                            Source = {Bind.twoWays((x) => x.data.image)}
                            Aspect="AspectFill"
                            HeightRequest="60"
                            WidthRequest="60" />
                        <XF.Label {...XF.Grid.column(1)}
                            text = {Bind.twoWays((x) => x.data.name)}
                            FontAttributes="Bold"
                            LineBreakMode="TailTruncation"/>
                        <XF.Label {...XF.Grid.row(1)}
                            {...XF.Grid.column(1)}
                            text = {Bind.twoWays((x) => x.data.location)}
                            FontAttributes="Italic"
                            VerticalOptions="End"
                            LineBreakMode="TailTruncation"/>
                    </XF.Grid>
                </XF.CollectionView.itemTemplate>
                </XF.CollectionView>
            </XF.ContentPage>
        );
    }
}
