import XNode from "@web-atoms/core/dist/core/XNode";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import AtomXFCarouselPage from "@web-atoms/xf-controls/dist/pages/AtomXFCarouselPage";

export default class CarouselPageView extends AtomXFCarouselPage {

    public create() {
        this.render(
            <XF.CarouselPage  title="Carousel Page Sample">
                <XF.ContentPage>
                    <XF.StackLayout>
                        <XF.Label horizontalTextAlignment="Center"
                            fontSize={30} text="Content 1"/>
                    </XF.StackLayout>
                </XF.ContentPage>

                <XF.ContentPage>
                    <XF.StackLayout>
                        <XF.Label horizontalTextAlignment="Center"
                            fontSize={30} text="Content 2"/>
                    </XF.StackLayout>
                </XF.ContentPage>

                <XF.ContentPage>
                    <XF.StackLayout>
                        <XF.Label horizontalTextAlignment="Center"
                            fontSize={30} text="Content 3"/>
                    </XF.StackLayout>
                </XF.ContentPage>
            </XF.CarouselPage>
        );
    }
}
