import Bind from "@web-atoms/core/dist/core/Bind";
import XNode from "@web-atoms/core/dist/core/XNode";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import AtomXFContentPage from "@web-atoms/xf-controls/dist/pages/AtomXFContentPage";
import WebSqlViewModel from "./WebSqlViewModel";

export default class WebSqlSample extends AtomXFContentPage {

    public viewModel: WebSqlViewModel;

    public create() {

        this.viewModel = this.resolve(WebSqlViewModel);

        this.render(<XF.ContentPage>

            <XF.ListView itemsSource={Bind.oneWay(() => this.viewModel.rows )}>
                <XF.ListView.itemTemplate>
                    <XF.DataTemplate>
                        <XF.TextCell
                            text={Bind.oneWay((x) => x.data.data)}
                            detail={Bind.oneWay((x) => x.data.id)}
                            />
                    </XF.DataTemplate>
                </XF.ListView.itemTemplate>
            </XF.ListView>

        </XF.ContentPage>);
    }

}
