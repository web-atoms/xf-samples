import XNode from "@web-atoms/core/dist/core/XNode";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import AtomXFContentPage from "@web-atoms/xf-controls/dist/pages/AtomXFContentPage";

export default class FlexLayoutView extends AtomXFContentPage {

    public create() {
        this.render(
            <XF.ContentPage>
                <XF.FlexLayout Direction="Column">

                    <XF.Label text="HEADER"
                        fontSize={30}
                        backgroundColor="Aqua"
                        horizontalTextAlignment="Center" />

                    <XF.FlexLayout { ... XF.FlexLayout.grow(1)}>

                        <XF.Label text="CONTENT"
                            fontSize="Large"
                            backgroundColor="Gray"
                            horizontalTextAlignment="Center"
                            verticalTextAlignment="Center"
                            {...XF.FlexLayout.grow(1)} />

                        <XF.BoxView {...XF.FlexLayout.basis(50)}
                                {...XF.FlexLayout.order(-1)}
                                color="Blue" />

                        <XF.BoxView {...XF.FlexLayout.basis(50)}
                                color="Green" />

                    </XF.FlexLayout>

                    <XF.Label text="FOOTER"
                        fontSize={30}
                        backgroundColor="Pink"
                        horizontalTextAlignment="Center" />
                    </XF.FlexLayout>
            </XF.ContentPage>
        );
    }
}
