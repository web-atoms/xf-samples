import Bind from "@web-atoms/core/dist/core/Bind";
import XNode from "@web-atoms/core/dist/core/XNode";
import WA from "@web-atoms/xf-controls/dist/clr/WA";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import AtomXFContentPage from "@web-atoms/xf-controls/dist/pages/AtomXFContentPage";

export default class DateFieldSample extends AtomXFContentPage {

    public date: any;

    public create() {

        this.date = new Date();

        this.render(<XF.ContentPage>
            <XF.Grid>
                <XF.ScrollView>
                    <WA.AtomForm>
                        <XF.BoxView
                            heightRequest={500}
                            />
                        <WA.AtomField>
                            <WA.AtomDateField
                                selectedDate={Bind.twoWays(() => this.date)}
                                />
                        </WA.AtomField>
                        <XF.BoxView
                            heightRequest={500}
                            />
                    </WA.AtomForm>
                </XF.ScrollView>
            </XF.Grid>
        </XF.ContentPage>);
    }

}
