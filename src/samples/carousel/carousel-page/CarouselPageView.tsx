import XNode from "@web-atoms/core/dist/core/XNode";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import AtomXFCarouselPage from "@web-atoms/xf-controls/dist/pages/AtomXFCarouselPage";
// https://docs.microsoft.com/en-us/xamarin/xamarin-forms/app-fundamentals/navigation/carousel-page

export default class CarouselPageView extends AtomXFCarouselPage {

    public create() {
        this.render(
            <XF.CarouselPage>
                <XF.ContentPage>
                    <XF.StackLayout>
                        <XF.Label text="Content 1"/>
                    </XF.StackLayout>
                </XF.ContentPage>

                <XF.ContentPage>
                    <XF.StackLayout>
                        <XF.Label text="Content 2"/>
                    </XF.StackLayout>
                </XF.ContentPage>

                <XF.ContentPage>
                    <XF.StackLayout>
                        <XF.Label text="Content 3"/>
                    </XF.StackLayout>
                </XF.ContentPage>
            </XF.CarouselPage>
        );
    }
}
