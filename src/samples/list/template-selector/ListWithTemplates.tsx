import Bind from "@web-atoms/core/dist/core/Bind";
import XNode from "@web-atoms/core/dist/core/XNode";
import WA from "@web-atoms/xf-controls/dist/clr/WA";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import AtomContentPage from "@web-atoms/xf-controls/dist/pages/AtomContentPage";
import { IMovie } from "../../../service/http/MovieService";
import ListViewModel from "../list-view/ListViewModel";

export default class ListWithTemplates extends AtomContentPage {

    public viewModel: ListViewModel;

    public create() {

        this.viewModel = this.resolve(ListViewModel);

        this.render(<XF.ContentPage title="List with Template Selector">
            <XF.ListView itemsSource={Bind.oneWay(() => this.viewModel.movies.value)}>
                <WA.AtomTemplateSelector.TemplateSelector>
                    <WA.AtomTemplateSelector selector={(d: IMovie) => /horror/i.test(d.genre) ? 1 : 0}>
                        {/* Template 0 */}
                        <XF.DataTemplate>
                            <XF.TextCell
                                text={Bind.oneWay((x) => x.data.name)}
                                textColor="black"
                                />
                        </XF.DataTemplate>
                        {/* Template 1 */}
                        <XF.DataTemplate>
                            <XF.TextCell
                                text={Bind.oneWay((x) => x.data.name)}
                                textColor="red"
                                />
                        </XF.DataTemplate>
                    </WA.AtomTemplateSelector>
                </WA.AtomTemplateSelector.TemplateSelector>
            </XF.ListView>
        </XF.ContentPage>);
    }

}
