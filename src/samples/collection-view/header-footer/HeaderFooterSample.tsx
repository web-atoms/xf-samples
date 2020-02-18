import Bind from "@web-atoms/core/dist/core/Bind";
import XNode from "@web-atoms/core/dist/core/XNode";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import AtomXFContentPage from "@web-atoms/xf-controls/dist/pages/AtomXFContentPage";
import CollectionViewSampleViewModel from "../CollectionViewSampleViewModel";

export default class HeaderFooterSample extends AtomXFContentPage {

    public viewModel: CollectionViewSampleViewModel;

    public create() {
        this.viewModel = this.resolve(CollectionViewSampleViewModel);

        this.render(
            <XF.ContentPage title = "Header and Footer Sample">
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
