import Bind from "@web-atoms/core/dist/core/Bind";
import XNode from "@web-atoms/core/dist/core/XNode";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import AtomXFContentPage from "@web-atoms/xf-controls/dist/pages/AtomXFContentPage";
import LabelViewModel from "./LabelViewModel";

export default class LabelView extends AtomXFContentPage {

    public viewModel: LabelViewModel;

    public create() {
        this.viewModel = this.resolve(LabelViewModel);
        this.render(
            <XF.ContentPage>
                <XF.StackLayout margin="10,10,200,300">
                    <XF.Label text="Label Sample"
                            horizontalOptions="Center" />
                    <XF.Label lineBreakMode="WordWrap">
                        <XF.Label.formattedText>
                            <XF.FormattedString>
                                <XF.Span text="TEXT MESSAGE"/>
                                <XF.Span text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a tincidunt sem. Phasellus mollis sit amet turpis in rutrum. Sed aliquam ac urna id scelerisque. "
                                    textColor="red"/>
                                <XF.Span text="Nullam feugiat sodales elit, et maximus nibh vulputate id."/>

                                <XF.Span text="Click me">
                                    <XF.Span.gestureRecognizers>
                                        <XF.TapGestureRecognizer command={Bind.event(
                                            (s, e) => this.viewModel.labelClick())}/>
                                    </XF.Span.gestureRecognizers>
                                </XF.Span>
                            </XF.FormattedString>
                        </XF.Label.formattedText>
                    </XF.Label>
                </XF.StackLayout>
            </XF.ContentPage>
        );
    }
}
