import Bind from "@web-atoms/core/dist/core/xnode/Bind";
import XNode from "@web-atoms/core/dist/core/xnode/XNode";
import { AtomXFControl } from "@web-atoms/core/dist/xf/controls/AtomXFControl";
import { ContentPage, Label, ListView, MasterDetailPage } from "@web-atoms/xf-controls/dist/controls/XF";
import AppHostViewModel from "./AppHostViewModel";

export default class AppHost extends AtomXFControl {

    public viewModel: AppHostViewModel;

    public create(): void {

        this.viewModel = this.resolve(AppHostViewModel);

        this.render(
            <MasterDetailPage detail={Bind.oneWay(() => this.viewModel.currentPage.element)}>
                <MasterDetailPage.Master>
                    <ContentPage>
                        <ListView
                            itemsSource={Bind.oneWay(() => this.viewModel.menuService.menus)}>
                            <ListView.ItemTemplate>
                                <Label text={Bind.oneWay((x) => x.data.label)}/>
                            </ListView.ItemTemplate>
                        </ListView>
                    </ContentPage>
                </MasterDetailPage.Master>
                <MasterDetailPage.Detail>
                    <ContentPage>
                        <Label text="Loading..."/>
                    </ContentPage>
                </MasterDetailPage.Detail>
            </MasterDetailPage>
        );
    }
}
