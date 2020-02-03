import Bind from "@web-atoms/core/dist/core/Bind";
import XNode from "@web-atoms/core/dist/core/XNode";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import AtomXFContentPage from "@web-atoms/xf-controls/dist/pages/AtomXFContentPage";
import CarouselViewModel from "./CarouselViewModel";

export default class CarouselView extends AtomXFContentPage {

    public viewModel: CarouselViewModel;

    public create() {
        this.viewModel = this.resolve(CarouselViewModel);
        this.render(<XF.ContentPage>
            <XF.CarouselView itemsSource={Bind.oneWay(() => this.viewModel.items)}>
                <XF.CarouselView.itemTemplate>
                    <XF.DataTemplate>
                        <XF.StackLayout>
                            <XF.Frame
                                borderColor="DarkGray"
                                cornerRadius={5}
                                margin="20"
                                heightRequest={30}
                                horizontalOptions="Center"
                                verticalOptions="CenterAndExpand">
                                <XF.StackLayout>
                                    <XF.Label text={Bind.oneWay((x) => x.data.label)}
                                        fontAttributes="Bold"
                                        fontSize={20}
                                        horizontalOptions="Center"
                                        verticalOptions="Center" />
                                </XF.StackLayout>
                            </XF.Frame>
                        </XF.StackLayout>
                    </XF.DataTemplate>
                </XF.CarouselView.itemTemplate>
            </XF.CarouselView>
        </XF.ContentPage>);
    }
}
