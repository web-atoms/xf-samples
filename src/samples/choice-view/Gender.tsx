import Bind from "@web-atoms/core/dist/core/Bind";
import XNode from "@web-atoms/core/dist/core/XNode";
import WA from "@web-atoms/xf-controls/dist/clr/WA";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import AtomXFContentPage from "@web-atoms/xf-controls/dist/pages/AtomXFContentPage";

export default class Gender extends AtomXFContentPage {

    public create() {
        this.render(<XF.ContentPage>
            <XF.Grid>
                <WA.AtomForm>
                    <WA.AtomField>
                        <WA.AtomChoiceView
                            itemsSource={["Male", "Female"]}
                            />
                    </WA.AtomField>
                    <WA.AtomField backgroundColor={XF.Color.lightGray}>
                        <WA.AtomExpander background={XF.SolidColorBrush.white}>
                            <XF.Label text="Heading" />
                            <WA.AtomExpander.detail>
                                <XF.Label text="Details"/>
                            </WA.AtomExpander.detail>
                        </WA.AtomExpander>
                    </WA.AtomField>
                    <WA.AtomField>
                        <XF.Label text="3rd Field"/>
                    </WA.AtomField>
                </WA.AtomForm>
            </XF.Grid>
        </XF.ContentPage>);
    }
}
