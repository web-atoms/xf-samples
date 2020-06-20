import XNode from "@web-atoms/core/dist/core/XNode";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import AtomXFContentPage from "@web-atoms/xf-controls/dist/pages/AtomXFContentPage";
import TableViewModel from "./TableViewModel";

export default class TableViewSample extends AtomXFContentPage {

    public viewModel: TableViewModel;

    public create() {

        this.viewModel = this.resolve(TableViewModel);

        this.render(
            <XF.ContentPage title = "Table View Sample">
                <XF.TableView>
                    <XF.TableRoot>
                        <XF.TableSection title = "Switch Section">
                            <XF.SwitchCell text = "Off State"/>
                            <XF.SwitchCell text = "On State" on= {true}/>
                        </XF.TableSection>
                        <XF.TableSection title = "Entry Section">
                            <XF.EntryCell label="Username"
                                placeholder="enter username" horizontalTextAlignment = "Center"/>
                            <XF.EntryCell label = "Password"
                                placeholder = "enter password" horizontalTextAlignment = "Center"/>
                        </XF.TableSection>
                    </XF.TableRoot>
                </XF.TableView>
            </XF.ContentPage>
        );
    }
}
