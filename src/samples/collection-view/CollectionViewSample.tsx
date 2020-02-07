import Bind from "@web-atoms/core/dist/core/Bind";
import XNode from "@web-atoms/core/dist/core/XNode";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import AtomXFContentPage from "@web-atoms/xf-controls/dist/pages/AtomXFContentPage";
import CollectionViewSampleViewModel from "./CollectionViewSampleViewModel";

export default class CollectionViewSample extends AtomXFContentPage {

    public viewModel: CollectionViewSampleViewModel;

    public create() {
        this.viewModel = this.resolve(CollectionViewSampleViewModel);

        this.render(
            <XF.ContentPage title = "Vertical List">
                <XF.CollectionView itemsSource = {Bind.oneWay(() => this.viewModel.list)}
                    itemsLayout = "VerticalList">
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
                            FontAttributes="Bold" />
                        <XF.Label {...XF.Grid.row(1)}
                            {...XF.Grid.column(1)}
                            text = {Bind.twoWays((x) => x.data.location)}
                            FontAttributes="Italic"
                            VerticalOptions="End" />
                    </XF.Grid>
                </XF.CollectionView.itemTemplate>
                </XF.CollectionView>
            </XF.ContentPage>
        );
    }
}

export class CollectionViewHorizontalList extends AtomXFContentPage {

    public viewModel: CollectionViewSampleViewModel;

    public create() {
        this.viewModel = this.resolve(CollectionViewSampleViewModel);

        this.render(
            <XF.ContentPage title = "Horizontal List">
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

export class VerticalGridSample extends AtomXFContentPage {

    public viewModel: CollectionViewSampleViewModel;

    public create() {
        this.viewModel = this.resolve(CollectionViewSampleViewModel);
        this.render(
            <XF.ContentPage title = "Vertical Grid">
                <XF.CollectionView itemsSource = {Bind.oneWay(() => this.viewModel.list)}>
                <XF.CollectionView.itemsLayout>
                    <XF.GridItemsLayout span = {2}
                        orientation = "Vertical"/>
                </XF.CollectionView.itemsLayout>
                <XF.CollectionView.itemTemplate>
                    <XF.Grid Padding="10">
                        <XF.Grid.rowDefinitions>
                            <XF.RowDefinition Height={35} />
                            <XF.RowDefinition Height={35} />
                        </XF.Grid.rowDefinitions>
                        <XF.Grid.columnDefinitions>
                            <XF.ColumnDefinition Width={70} />
                            <XF.ColumnDefinition Width={80} />
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

export class HorizontalGridSample extends AtomXFContentPage {
    public viewModel: CollectionViewSampleViewModel;

    public create() {
        this.viewModel = this.resolve(CollectionViewSampleViewModel);
        this.render(
            <XF.ContentPage title = "Horizontal Grid">
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

export class HeaderFooterSample extends AtomXFContentPage {

    public viewModel: CollectionViewSampleViewModel;

    public create() {
        this.viewModel = this.resolve(CollectionViewSampleViewModel);

        this.render(
            <XF.ContentPage title = "Header and Footer">
                <XF.CollectionView itemsSource = {Bind.oneWay(() => this.viewModel.list)}
                    itemsLayout = "VerticalList">
                        <XF.CollectionView.headerTemplate>
                            <XF.DataTemplate>
                            <XF.StackLayout backgroundColor="LightGray">
                                <XF.Label Margin="10,0,0,0"
                                    text="Monkeys"
                                    FontSize="Small"
                                    fontAttributes="Bold" />
                            </XF.StackLayout>
                            </XF.DataTemplate>
                        </XF.CollectionView.headerTemplate>
                        <XF.CollectionView.footerTemplate>
                            <XF.DataTemplate>
                            <XF.StackLayout BackgroundColor="LightGray">
                                <XF.Label Margin="10,0,0,0"
                                       text="Friends of Xamarin Monkey"
                                       FontSize="Small"
                                       fontAttributes="Bold" />
                            </XF.StackLayout>
                            </XF.DataTemplate>
                        </XF.CollectionView.footerTemplate>
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
                            FontAttributes="Bold" />
                        <XF.Label {...XF.Grid.row(1)}
                            {...XF.Grid.column(1)}
                            text = {Bind.twoWays((x) => x.data.location)}
                            FontAttributes="Italic"
                            VerticalOptions="End" />
                    </XF.Grid>
                </XF.CollectionView.itemTemplate>
                </XF.CollectionView>
            </XF.ContentPage>
        );
    }
}

export class GroupingSample extends AtomXFContentPage {

    public viewModel: CollectionViewSampleViewModel;

    public create() {
        this.viewModel = this.resolve(CollectionViewSampleViewModel);

        this.render(
            <XF.ContentPage title = "Grouping">
                <XF.CollectionView itemsSource = {Bind.oneWay(() => this.viewModel.group)}
                    isGrouped = {true}
                    itemsLayout = "VerticalList">
                <XF.CollectionView.groupHeaderTemplate>
                    <XF.DataTemplate>
                        <XF.Label text={Bind.twoWays((x) => x.data.name)}
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
                            Source = {Bind.twoWays((x) => x.data.image)}
                            Aspect="AspectFill"
                            HeightRequest="60"
                            WidthRequest="60" />
                        <XF.Label {...XF.Grid.column(1)}
                            text = {Bind.twoWays((x) => x.data.name)}
                            FontAttributes="Bold" />
                        <XF.Label {...XF.Grid.row(1)}
                            {...XF.Grid.column(1)}
                            text = {Bind.twoWays((x) => x.data.location)}
                            FontAttributes="Italic"
                            VerticalOptions="End" />
                    </XF.Grid>
                </XF.CollectionView.itemTemplate>
                </XF.CollectionView>
            </XF.ContentPage>
        );
    }
}
