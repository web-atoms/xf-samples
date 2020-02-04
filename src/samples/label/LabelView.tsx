import XNode from "@web-atoms/core/dist/core/XNode";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import AtomXFContentPage from "@web-atoms/xf-controls/dist/pages/AtomXFContentPage";

export default class LabelView extends AtomXFContentPage {

    public create() {

        this.render(
            <XF.ContentPage>
                <XF.StackLayout Margin="10,10,200,300">
                    <XF.Label Text="Label Sample"
                            HorizontalOptions="Center" />
                    <XF.Label LineBreakMode="WordWrap">
                        <XF.Label.formattedText>
                            <XF.FormattedString>
                                <XF.Span text="TEXT MESSAGE"/>
                                <XF.Span Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a tincidunt sem. Phasellus mollis sit amet turpis in rutrum. Sed aliquam ac urna id scelerisque. "
                                    textColor="red"/>
                                <XF.Span Text="Nullam feugiat sodales elit, et maximus nibh vulputate id."/>
                            </XF.FormattedString>
                        </XF.Label.formattedText>
                    </XF.Label>
                </XF.StackLayout>
            </XF.ContentPage>
        );
    }
}
