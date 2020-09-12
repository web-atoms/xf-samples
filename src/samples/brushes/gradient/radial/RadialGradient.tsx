import Colors from "@web-atoms/core/dist/core/Colors";
import XNode from "@web-atoms/core/dist/core/XNode";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import AtomXFContentPage from "@web-atoms/xf-controls/dist/pages/AtomXFContentPage";

export default class RadialGradient extends AtomXFContentPage {

    public create() {
        this.render(<XF.ContentPage>
            <XF.Grid padding={20}>
                <XF.Frame
                    borderColor="LightGray"
                    hasShadow="True"
                    cornerRadius="12"
                    background="DarkBlue">
                    <XF.Frame.background>
                        <XF.RadialGradientBrush
                            center="0.5,0.5"
                            radius={0.5}>
                            <XF.GradientStop
                                color="Red"
                                offset={0.1}/>
                            <XF.GradientStop
                                color={Colors.darkOrange}
                                offset={1.0}/>
                        </XF.RadialGradientBrush>
                    </XF.Frame.background>
                </XF.Frame>
            </XF.Grid>
        </XF.ContentPage>);
    }
}
