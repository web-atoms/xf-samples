import XNode from "@web-atoms/core/dist/core/XNode";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import AtomXFContentPage from "@web-atoms/xf-controls/dist/pages/AtomXFContentPage";

export default class LinearGradient extends AtomXFContentPage {

    public create() {
        this.render(<XF.ContentPage>
            <XF.Grid padding={20}>
                <XF.Frame
                    borderColor="LightGray"
                    hasShadow="True"
                    cornerRadius="12"
                    background="DarkBlue">
                    <XF.Frame.background>
                        <XF.LinearGradientBrush
                            startPoint="0,0"
                            endPoint="1,0">
                            <XF.GradientStop
                                color="Yellow"
                                offset={0.1}/>
                            <XF.GradientStop
                                color="Green"
                                offset={1.0}/>
                        </XF.LinearGradientBrush>
                    </XF.Frame.background>
                </XF.Frame>
            </XF.Grid>
        </XF.ContentPage>);
    }
}
