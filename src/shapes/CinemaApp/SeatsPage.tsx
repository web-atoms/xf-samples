import AtomXFContentPage from "@web-atoms/xf-controls/dist/pages/AtomXFContentPage";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import XNode from "@web-atoms/core/dist/core/XNode";

export default class SeatsPage extends AtomXFContentPage {

    public create() {
        this.render(
            <XF.ContentPage>
            {/* xmlns="http://xamarin.com/schemas/2014/forms"
            xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"
            xmlns:d="http://xamarin.com/schemas/2014/forms/design"
            xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" xmlns:skia="clr-namespace:SkiaSharp.Views.Forms;assembly=SkiaSharp.Views.Forms"
            mc:Ignorable="d" NavigationPage.HasNavigationBar="False"
            BackgroundColor="#1B1A28"
            x:Class="CinemaApp.SeatsPage"> */}
    <XF.ScrollView>
        <XF.Grid RowDefinitions="Auto, Auto, *" Padding="30" RowSpacing="30">
            <XF.StackLayout Orientation="Horizontal" Margin="0,20" VerticalOptions="Start" Spacing="20">
                <XF.Image Source="{Binding SelectedTicket.Image}" Aspect="AspectFill" WidthRequest="70" HeightRequest="90"
                   HorizontalOptions="Start"/>
                <XF.StackLayout>
                    <XF.Label Text="{Binding SelectedTicket.MovieTitle}" TextColor="White" FontSize="20"/>
                    <XF.StackLayout Orientation="Horizontal" Spacing="15">
                        <XF.StackLayout Orientation="Horizontal">
                            <XF.Image Source="calendar.png" HeightRequest="15" WidthRequest="15"/>
                            <XF.Label Text="{Binding SelectedTicket.ShowingDate, StringFormat='{0:dd.MM.yyyy}'}"
                               TextColor="#8989CB" FontSize="12" VerticalOptions="Center"/>
                        </XF.StackLayout>
                        <XF.StackLayout Orientation="Horizontal">
                            <XF.Image Source="time.png" HeightRequest="15" WidthRequest="15"/>
                            <XF.Label Text="{Binding SelectedTicket.ShowingDate, StringFormat='{0:h:mm tt}'}"
                               TextColor="#8989CB" FontSize="12" VerticalOptions="Center"/>
                        </XF.StackLayout>
                    </XF.StackLayout>
                </XF.StackLayout>
            </XF.StackLayout>
            <XF.BoxView BackgroundColor="White" Opacity="0.2" HeightRequest="1" VerticalOptions="End"/>
            <XF.StackLayout HorizontalOptions="FillAndExpand" {...XF.Grid.row(1)} Spacing="30">
                <XF.Path Stroke="#00b7fc" Aspect="Fill" StrokeThickness="5" HeightRequest="30"
                  Data="M0,0S74.587-33.916,148.078-33.916,293.962,0,293.962,0"/>
                <skia:SKCanvasView x:Name="canvasView" HeightRequest="250" WidthRequest="350" HorizontalOptions="Center" 
                               PaintSurface="SKCanvasView_PaintSurface"/>
                <XF.BoxView BackgroundColor="White" Opacity="0.2" HeightRequest="1" VerticalOptions="Center"/>
                <XF.StackLayout Orientation="Horizontal" Spacing="30" HorizontalOptions="Center">
                    <XF.StackLayout Orientation="Horizontal">
                        <XF.Rectangle Stroke="#353551" StrokeThickness="1" HeightRequest="15" WidthRequest="15"
                               VerticalOptions="Center"/>
                        <XF.Label Text="Available" TextColor="White" FontSize="14" VerticalOptions="Center"/>
                    </XF.StackLayout>
                    <XF.StackLayout Orientation="Horizontal">
                        <XF.Rectangle Fill="#353551" HeightRequest="15" WidthRequest="15" VerticalOptions="Center"/>
                        <XF.Label Text="Reserved" TextColor="White" FontSize="14" VerticalOptions="Center"/>
                    </XF.StackLayout>
                    <XF.StackLayout Orientation="Horizontal">
                        <XF.Rectangle Fill="#9747FF" HeightRequest="15" WidthRequest="15" VerticalOptions="Center"/>
                        <XF.Label Text="Your Seats" TextColor="White" FontSize="14" VerticalOptions="Center"/>
                    </XF.StackLayout>
                </XF.StackLayout>
            </XF.StackLayout>
            <XF.Button {...XF.Grid.row(2)} Text="Buy More Tickets" TextColor="White" WidthRequest="220" HeightRequest="40" 
                CornerRadius="20" BackgroundColor="#9747FF"  HorizontalOptions="Center" VerticalOptions="End"/>
        </XF.Grid>
    </XF.ScrollView>
</XF.ContentPage>
        );
    }
}