import AtomXFContentPage from "@web-atoms/xf-controls/dist/pages/AtomXFContentPage";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import XNode from "@web-atoms/core/dist/core/XNode";

export default class Geometric extends AtomXFContentPage {
    public create() {

        this.render(
            <XF.ContentPage>
                {/* xmlns="http://xamarin.com/schemas/2014/forms"
                xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"
                xmlns:d="http://xamarin.com/schemas/2014/forms/design"
                xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
                mc:Ignorable="d"
                x:Class="Geometric.MainPage" */}
    <XF.AbsoluteLayout>
        <XF.AbsoluteLayout ></XF.AbsoluteLayout>
        {/* x:Name="backgroundLayout" */}
        <XF.Frame CornerRadius="10" BackgroundColor="White" Opacity="0.7" Padding="20" Margin="20, 50, 20, 0">
            <XF.StackLayout>
                <XF.Label Text="Colorful Geometric Background" FontAttributes="Bold" />
                <XF.Label Text="This background is generated using Xamarin.Forms Shapes and uses no images. Created by Marcofolio.net and inspired by SpoonGraphics." />
            </XF.StackLayout>
        </XF.Frame>
    </XF.AbsoluteLayout>
</XF.ContentPage>
        );
    }
}