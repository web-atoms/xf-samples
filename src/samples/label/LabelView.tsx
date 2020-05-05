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
            <XF.ContentPage title="Label Sample">
                <XF.ScrollView>
                <XF.StackLayout margin="10">
                    <XF.Label text="Introduction"
                            fontSize="25"
                            textColor="#111"
                            horizontalOptions="Center" />
                    <XF.Label text="What is web atoms?"
                            fontSize="20"
                            textColor="#111"
                            horizontalOptions="Start" />
                    <XF.Label lineBreakMode="WordWrap"
                            fontSize="14">
                        <XF.Label.formattedText>
                            <XF.FormattedString>
                                <XF.Span text="        'Web Atoms' is an advanced MVVM framework to write cross platform applications in "/>
                                <XF.Span text="HTML5 "
                                    textColor="red"/>
                                <XF.Span text="and "/>
                                <XF.Span text="Xamarin.Forms."
                                    textColor="red"/>
                                <XF.Span text=" Unlike other frameworks, Web Atoms lets you divide User Interface logic in strict MVVM fashion and separates View in HTML5 and Xaml. Benefit of separating User interface logic in ViewModel is you can individually unit test view model to make sure your logic is consistent across platforms. "/>
                                <XF.Span text="Click me" textDecorations="Underline" textColor="Blue">
                                    <XF.Span.gestureRecognizers>
                                        <XF.TapGestureRecognizer command={Bind.event(
                                            (s, e) => this.viewModel.labelClick())}/>
                                    </XF.Span.gestureRecognizers>
                                </XF.Span>
                            </XF.FormattedString>
                        </XF.Label.formattedText>
                    </XF.Label>
                    <XF.Label text="        Also everything is transpiled into JavaScript, your View Model and Services remain in JavaScript and in browser it works flawlessly."/>
                    <XF.Label text="        In Xamarin.Forms, Web Atoms package written C# helps you easily host JavaScript modules inside an application and entire User Interface is hosed via JavaScript."/>
                    <XF.Label text="Benefits of Web Atoms with Xamarin.Forms"
                            fontSize="20"
                            textColor="#111"
                            horizontalOptions="Start" />
                    <XF.Label text="1. Write TSX instead of XAML" />
                    <XF.Label text="2. Small application download size" />
                    <XF.Label text="3. Dynamic Module Loading from web" />
                    <XF.Label text="4. Reuse existing NuGet components by exposing via services" />
                    <XF.Label text="5. Host javascript on server with instant updates to apps" />
                </XF.StackLayout>
                </XF.ScrollView>
            </XF.ContentPage>
        );
    }
}
