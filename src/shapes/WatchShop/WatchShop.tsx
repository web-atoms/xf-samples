import AtomXFContentPage from "@web-atoms/xf-controls/dist/pages/AtomXFContentPage";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import XNode from "@web-atoms/core/dist/core/XNode";

export default class WatchShop extends AtomXFContentPage {

    public create() {
        this.render(
        <XF.ContentPage>
            {/* // xmlns="http://xamarin.com/schemas/2014/forms"
            // xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"
            // xmlns:d="http://xamarin.com/schemas/2014/forms/design"
            // xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
            // xmlns:st="clr-namespace:Plugin.SharedTransitions;assembly=Plugin.SharedTransitions"
            // mc:Ignorable="d" BackgroundColor="#F5F6F6"
            //  NavigationPage.HasNavigationBar="False"
            // x:Class="WatchShop.DetailsPage"> */}

            <XF.Grid rowDefinitions="2*, *">
                <XF.Image Aspect="Fill" Source="DetailsBg.png"/>
                <XF.ImageButton Source="back.png" Margin="20" BackgroundColor="Transparent" HorizontalOptions="Start" VerticalOptions="Start"
                    HeightRequest="24" WidthRequest="24" Clicked="BackTapped"/>
            <XF.Grid WidthRequest="280" HeightRequest="360" HorizontalOptions="Center" VerticalOptions="Center">
            <XF.Path Fill="White" Aspect="Uniform"
                  Data="M48 169.745C48 162.708 51.6977 156.189 57.7371 152.579L297.737 9.0929C311.068 1.12286 328 10.7271 328 26.2589V331C328 342.046 319.046 351 308 351H68C56.9543 351 48 342.046 48 331V169.745Z"/>
                <XF.Image Source="{Binding SelectedProduct.Image}"/>
            {/* st:Transition.Name="WatchImage" */}
            </XF.Grid>
            <XF.StackLayout Spacing="20" {...XF.Grid.row(1)} Margin="30,0">
                <XF.Grid>
                    <XF.StackLayout>
                        <XF.Label Text="{Binding SelectedProduct.Name}" TextColor="#2D2942" FontSize="25" FontAttributes="Bold"/>
                        <XF.Label Text="{Binding SelectedProduct.Model}" TextColor="#2D2942" FontSize="14" Opacity="0.5"/>
                    </XF.StackLayout>
                    <XF.Label Text="{Binding SelectedProduct.Price, StringFormat='${0}'}" TextColor="#2D2942" FontSize="20"
                       FontAttributes="Bold" HorizontalOptions="End"/>
                </XF.Grid>
                <XF.StackLayout>
                    <XF.Label Text="About" TextColor="#2D2942" FontSize="16" FontAttributes="Bold"/>
                    <XF.Label Text="{Binding SelectedProduct.Description}" TextColor="#2D2942" FontSize="14" Opacity="0.5"/>
                </XF.StackLayout>
                <XF.StackLayout Orientation="Horizontal" Spacing="30">
                    <XF.Grid>
                        <XF.Ellipse Aspect="Uniform" WidthRequest="32" HeightRequest="32" Fill="White"/>
                        <XF.Path Aspect="Uniform" Stroke="#F83A26" StrokeThickness="2" Data="M5 12H19" StrokeLineCap="Round" 
                            StrokeLineJoin="Round" HorizontalOptions="Center" VerticalOptions="Center"/>
                    </XF.Grid>
                <XF.Label Text="1" TextColor="Black" FontSize="20" HorizontalOptions="Center" VerticalOptions="Center"/>
                    <XF.Grid>
                        <XF.Ellipse Aspect="Uniform" WidthRequest="32" HeightRequest="32" Fill="White"/>
                        <XF.Path Aspect="Uniform" Stroke="#F83A26" StrokeThickness="2" Data="M12 5V19" StrokeLineCap="Round" 
                            StrokeLineJoin="Round" HorizontalOptions="Center" VerticalOptions="Center"/>
                        <XF.Path Aspect="Uniform" Stroke="#F83A26" StrokeThickness="2" Data="M5 12H19" StrokeLineCap="Round" 
                            StrokeLineJoin="Round" HorizontalOptions="Center" VerticalOptions="Center"/>
                    </XF.Grid>
                <XF.Button WidthRequest="195" HeightRequest="46" CornerRadius="32" HorizontalOptions="End" BackgroundColor="#F83A26"
                    Text="ADD TO CART" TextColor="White" FontSize="14"/>
                </XF.StackLayout>
            </XF.StackLayout>
        </XF.Grid>
    </XF.ContentPage>
    );
    }
}