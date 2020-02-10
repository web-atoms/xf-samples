import XNode from "@web-atoms/core/dist/core/XNode";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import AtomXFContentPage from "@web-atoms/xf-controls/dist/pages/AtomXFContentPage";
import TableViewModel from "./TableViewModel";

export default class TableViewSample extends AtomXFContentPage {

    public viewModel: TableViewModel;

    public create() {

        this.viewModel = this.resolve(TableViewModel);

        this.render(
            <XF.ContentPage>
                <XF.TableView>
                    <XF.TableRoot>
                        <XF.TableSection>
                            <XF.ViewCell>
                            <XF.SwitchCell text = "New Voice Mail" />
                            <XF.SwitchCell text = "New Mail" On="true" />
                            </XF.ViewCell>
                        </XF.TableSection>
                    </XF.TableRoot>
                </XF.TableView>
            </XF.ContentPage>
        );
    }
}
