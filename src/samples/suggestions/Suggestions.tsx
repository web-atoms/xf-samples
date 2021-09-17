import Bind from "@web-atoms/core/dist/core/Bind";
import XNode from "@web-atoms/core/dist/core/XNode";
import WA from "@web-atoms/xf-controls/dist/clr/WA";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import AtomXFContentPage from "@web-atoms/xf-controls/dist/pages/AtomXFContentPage";
import countries from "../../model/countries";

export default class Suggestions extends AtomXFContentPage {

    public create() {
        this.render(<XF.ContentPage title="Suggestions">
            <XF.Grid>
                <XF.ScrollView>
                    <WA.AtomForm>
                        <WA.AtomField label="Countries">
                            <WA.AtomSuggestions
                                header="Country"
                                itemsSource={countries}>
                                    {/* <WA.AtomSuggestions.prompt>
                                        <XF.Label text="Country" textColor={XF.Color.darkOrange}/>
                                    </WA.AtomSuggestions.prompt> */}
                                <WA.AtomSuggestions.itemTemplate>
                                    <XF.DataTemplate>
                                        <XF.Label text={Bind.oneTime((x) => x.data.label)}/>
                                    </XF.DataTemplate>
                                </WA.AtomSuggestions.itemTemplate>
                            </WA.AtomSuggestions>
                        </WA.AtomField>
                    </WA.AtomForm>
                </XF.ScrollView>
            </XF.Grid>
        </XF.ContentPage>);
    }

}
