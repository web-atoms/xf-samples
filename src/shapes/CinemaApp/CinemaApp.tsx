import AtomXFContentPage from "@web-atoms/xf-controls/dist/pages/AtomXFContentPage";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import XNode from "@web-atoms/core/dist/core/XNode";
import Colors from "@web-atoms/core/dist/core/Colors";

export default class CinemaApp extends AtomXFContentPage {
    public create() {

        this.render(
            <XF.ContentPage navigation = "False" backgroundColor = {Colors.rgba(27, 26, 40)}>
            {/* xmlns="http://xamarin.com/schemas/2014/forms"
            xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"
            xmlns:d="http://xamarin.com/schemas/2014/forms/design"
            xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
            mc:Ignorable="d" BackgroundColor="#1B1A28"
            NavigationPage.HasNavigationBar="False"
            x:Class="CinemaApp.MainPage"> */}

            <XF.Grid rowDefinitions="auto, *" padding="30" rowSpacing={40}>
                <XF.Label text="IMAX" textColor={Colors.rgba(0, 183, 252)} fontSize={40} fontAttributes="Bold" horizontalOptions="Center" />
                <XF.StackLayout {...XF.Grid.row(1)} spacing= {15}>
                    <XF.Label text="Your Tickets" textColor={Colors.white} fontSize={20} fontAttributes="Bold"/>
                    <XF.CollectionView selectionMode="Single" itemsSource="{Binding Tickets}"
                            selectedItem="{Binding SelectedTicket}" selectionChangedCommand="TicketSelected">
                        <XF.CollectionView.itemsLayout>
                            <XF.GridItemsLayout Orientation="Vertical" span = {2} verticalItemSpacing = {20} horizontalItemSpacing = {20}/>
                        </XF.CollectionView.itemsLayout>
                        {/* <XF.CollectionView.emptyView>
                            <XF.Label Text="No ticket found." TextColor="Gray" HorizontalOptions="Center" VerticalOptions="Center"/>
                        </XF.CollectionView.emptyView> */}
                        <XF.CollectionView.itemTemplate>
                            <XF.DataTemplate>
                                <XF.StackLayout spacing="10">
                                    <XF.Image source="{Binding Image}" aspect="AspectFill" heightRequest={235}
                                        horizontalOptions="FillAndExpand"/>
                                    <XF.Label text="{Binding MovieTitle}" textColor={Colors.white} fontSize={14}/>
                                </XF.StackLayout>
                            </XF.DataTemplate>
                        </XF.CollectionView.itemTemplate>
                    </XF.CollectionView>
                </XF.StackLayout>
            </XF.Grid>
        </XF.ContentPage>
        );
    }
}