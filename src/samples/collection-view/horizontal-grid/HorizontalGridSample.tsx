import Bind from "@web-atoms/core/dist/core/Bind";
import XNode from "@web-atoms/core/dist/core/XNode";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import AtomXFContentPage from "@web-atoms/xf-controls/dist/pages/AtomXFContentPage";
import HorizontalGridViewModel from "./HorizontalGridViewModel";

export default class HorizontalGridSample extends AtomXFContentPage {
    public viewModel: HorizontalGridViewModel;

    public create() {
        this.viewModel = this.resolve(HorizontalGridViewModel);
        this.render(
            <XF.ContentPage title = "Horizontal Grid Sample">
                <XF.CollectionView itemsSource = {Bind.oneWay(() => this.viewModel.list)}>
                <XF.CollectionView.itemsLayout>
                    <XF.GridItemsLayout span = {4}
                        orientation = "Horizontal"/>
                </XF.CollectionView.itemsLayout>
                <XF.CollectionView.itemTemplate>
                    <XF.Grid Padding="10">
                        <XF.Grid.rowDefinitions>
                            <XF.RowDefinition Height={35} />
                            <XF.RowDefinition Height={35} />
                        </XF.Grid.rowDefinitions>
                        <XF.Grid.columnDefinitions>
                            <XF.ColumnDefinition Width={70} />
                            <XF.ColumnDefinition Width={140} />
                        </XF.Grid.columnDefinitions>
                        <XF.Image {...XF.Grid.rowSpan(2)}
                            Source = {Bind.twoWays((x) => x.data.image)}
                            Aspect="AspectFill"
                            HeightRequest="60"
                            WidthRequest="60" />
                        <XF.Label {...XF.Grid.column(1)}
                            text = {Bind.twoWays((x) => x.data.name)}
                            fontAttributes="Bold"
                            lineBreakMode="TailTruncation"/>
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
