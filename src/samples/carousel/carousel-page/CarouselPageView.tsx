import XNode from "@web-atoms/core/dist/core/XNode";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import AtomXFCarouselPage from "@web-atoms/xf-controls/dist/pages/AtomXFCarouselPage";
import Bind from "@web-atoms/core/dist/core/Bind";

export default class CarouselPageView extends AtomXFCarouselPage {

    public create() {
        this.render(
            <XF.CarouselPage  title="Carousel Page Sample">
                <XF.ContentPage>
                    <XF.StackLayout orientation = "Vertical">
                        <XF.Label horizontalTextAlignment="Center"
                            fontSize={30} text="Content 1"/>
                        <XF.Image source = "https://cdn.jsdelivr.net/npm/@web-atoms/samples@1.1.45/src/web/images/logo.png"
                            horizontalOptions = "Center" verticalOptions = "Center"/>
                    </XF.StackLayout>
                </XF.ContentPage>

                <XF.ContentPage>
                    <XF.StackLayout orientation = "Vertical">
                        <XF.Label horizontalTextAlignment="Center"
                            fontSize={30} text="Content 2"/>
                        <XF.Image source = "https://cdn.jsdelivr.net/npm/@web-atoms/samples@1.1.45/src/web/images/logo.png"
                            horizontalOptions = "Center" verticalOptions = "Center"/>
                    </XF.StackLayout>
                </XF.ContentPage>

                <XF.ContentPage>
                    <XF.StackLayout orientation = "Vertical">
                        <XF.Label horizontalTextAlignment="Center"
                            fontSize={30} text="Content 3"/>
                        <XF.Image source = "https://cdn.jsdelivr.net/npm/@web-atoms/samples@1.1.45/src/web/images/logo.png"
                            horizontalOptions = "Center" verticalOptions = "Center"/>
                    </XF.StackLayout>
                </XF.ContentPage>
            </XF.CarouselPage>
        );
    }
}
