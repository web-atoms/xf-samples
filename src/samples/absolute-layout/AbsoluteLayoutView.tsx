import XNode from "@web-atoms/core/dist/core/XNode";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import AtomXFContentPage from "@web-atoms/xf-controls/dist/pages/AtomXFContentPage";

export default class AbsoluteLayoutView extends AtomXFContentPage {

    public create() {
        this.render(
            <XF.ContentPage>
                <XF.ContentPage.content>
                    <XF.AbsoluteLayout>
                        <XF.Label text="I'm centered on iPhone 4 but no other device"
                            {... XF.AbsoluteLayout.layoutBounds("115, 150, 100, 100")}
                            lineBreakMode="WordWrap"  />
                        <XF.Label text="I'm bottom center on every device."
                            { ... XF.AbsoluteLayout.layoutBounds("0.5, 1, 0.5, .1")}
                            { ... XF.AbsoluteLayout.layoutFlags("All")}
                            lineBreakMode="WordWrap"  />
                        <XF.BoxView color="Olive"
                            { ... XF.AbsoluteLayout.layoutBounds("1, 0.5, 25, 100")}
                            { ... XF.AbsoluteLayout.layoutFlags("PositionProportional")} />
                        <XF.BoxView color="Red"
                            {... XF.AbsoluteLayout.layoutBounds("0, 0.5, 25, 100") }
                            { ... XF.AbsoluteLayout.layoutFlags("PositionProportional")} />
                        <XF.BoxView color="Blue"
                            { ... XF.AbsoluteLayout.layoutBounds("0.5, 0, 100, 25")}
                            { ... XF.AbsoluteLayout.layoutFlags("PositionProportional")} />
                    </XF.AbsoluteLayout>
                </XF.ContentPage.content>
            </XF.ContentPage>
        );
    }
}
