import XNode from "@web-atoms/core/dist/core/XNode";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import AtomXFContentPage from "@web-atoms/xf-controls/dist/pages/AtomXFContentPage";

export default class ImageView extends AtomXFContentPage {

    public create() {
        this.render(
            <XF.ContentPage>
                <XF.StackLayout margin="20,35,20,20">
                    <XF.Image source="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Xamarin-logo.svg/1920px-Xamarin-logo.svg.png"
                        heightRequest={300} />
                </XF.StackLayout>
            </XF.ContentPage>
        );
    }
}
