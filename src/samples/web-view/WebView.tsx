import XNode from "@web-atoms/core/dist/core/XNode";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import AtomXFContentPage from "@web-atoms/xf-controls/dist/pages/AtomXFContentPage";

const html = `
<html>
    <body>
        <div>Test</div>
    </body>
</html>
`;

export default class WebView extends AtomXFContentPage {

    public create() {
        this.render(
            <XF.ContentPage title="Web View Demo">
                <XF.StackLayout>
                    <XF.WebView
                        heightRequest={1000}
                        widthRequest={1000}
                        source={html}/>
                </XF.StackLayout>
            </XF.ContentPage>
        );
    }
}
