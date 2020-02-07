import Bind from "@web-atoms/core/dist/core/Bind";
import XNode from "@web-atoms/core/dist/core/XNode";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import AtomXFContentPage from "@web-atoms/xf-controls/dist/pages/AtomXFContentPage";
import ListViewModel from "../../list/list-view/ListViewModel";
import CollectionViewSampleViewModel from "./../CollectionViewSampleViewModel";
export default class SwipeCollectionViewSample extends AtomXFContentPage {

    public viewModel: ListViewModel;

    public create() {
        this.viewModel = this.resolve(ListViewModel);

        this.render(
            <XF.ContentPage title = "Swipe Collection View">
               <XF.CollectionView itemsSource= {Bind.oneWay(() => this.viewModel.movies.value)}>
                    <XF.CollectionView.itemTemplate>
                        <XF.DataTemplate>
                            <XF.SwipeView>
                                <XF.SwipeView.leftItems>
                                    <XF.SwipeItems>
                                        <XF.SwipeItem text="Archive"
                                            backgroundColor="LightGreen"
                                            />
                                        <XF.SwipeItem text="Delete"/>
                                    </XF.SwipeItems>
                                </XF.SwipeView.leftItems>
                                <XF.Grid padding={10}>
                                    <XF.Grid.rowDefinitions>
                                        <XF.RowDefinition height="Auto"/>
                                        <XF.RowDefinition height="Auto"/>
                                    </XF.Grid.rowDefinitions>
                                    <XF.Grid.columnDefinitions>
                                        <XF.ColumnDefinition width="Auto" />
                                        <XF.ColumnDefinition width="Auto" />
                                    </XF.Grid.columnDefinitions>
                                    <XF.CheckBox { ...XF.Grid.rowSpan(2)} />
                                    <XF.Label
                                        fontSize={18}
                                        {...XF.Grid.column(1)}
                                        text={Bind.oneWay((x) => x.data.name)}/>
                                    <XF.Label
                                        {...XF.Grid.column(1)}
                                        {...XF.Grid.row(1)}
                                        text={Bind.oneWay((x) => x.data.genre)}
                                        />
                                </XF.Grid>
                            </XF.SwipeView>
                        </XF.DataTemplate>
                    </XF.CollectionView.itemTemplate>
                </XF.CollectionView>
            </XF.ContentPage>
        );
    }
}
