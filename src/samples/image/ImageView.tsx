import XNode from "@web-atoms/core/dist/core/XNode";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import AtomXFContentPage from "@web-atoms/xf-controls/dist/pages/AtomXFContentPage";

export default class ImageView extends AtomXFContentPage {

    public create() {
        this.render(
            <XF.ContentPage>
                <XF.StackLayout margin="20,35,20,20">
                    <XF.Image source="http://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Papio_anubis_%28Serengeti%2C_2009%29.jpg/200px-Papio_anubis_%28Serengeti%2C_2009%29.jpg"
                        heightRequest={300} />
                </XF.StackLayout>
            </XF.ContentPage>
        );
    }
}
